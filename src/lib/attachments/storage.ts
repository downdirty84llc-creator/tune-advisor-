/**
 * Attachment storage rules: what may be uploaded, and where it lands.
 *
 * Everything here is pure so it can be tested without a database, because the
 * two decisions it makes are the ones that are expensive to get wrong.
 *
 * The first is the accepted-type list. It exists three times — the
 * `attachment_mime_allowed` CHECK constraint, the `attachments` bucket's
 * `allowed_mime_types`, and `ATTACHMENT_MIME_TYPES` below — and that
 * duplication is deliberate rather than an oversight to tidy up. The database
 * halves are the backstop; this copy exists so a rejected upload comes back as
 * a 422 naming the accepted formats instead of a constraint violation
 * surfacing as a 500. The cost is that a new format means editing three
 * places, and `tests/unit/attachments/storage.test.ts` pins this copy against
 * the migration's list so the drift is caught rather than discovered.
 *
 * The second is the object path. Attachment buckets are private and downloads
 * are signed per request, but a predictable path is still one policy mistake
 * away from being enumerable, so every object carries a random segment. The
 * randomness is supplied by the caller (`newStorageToken`) rather than
 * generated in the path builder, which keeps the builder deterministic and
 * therefore testable.
 */

/** Mirrors `attachment_mime_allowed` in migration `...001200`. */
export const ATTACHMENT_MIME_TYPES = [
  'application/pdf',
  'text/csv',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'image/png',
  'image/jpeg',
  'image/webp',
] as const;

export type AttachmentMimeType = (typeof ATTACHMENT_MIME_TYPES)[number];

/** Signed download links are minted per request and expire quickly. */
export const ATTACHMENT_SIGNED_URL_TTL_SECONDS = 120;

export function isAttachmentMimeType(
  value: unknown,
): value is AttachmentMimeType {
  return (
    typeof value === 'string' &&
    (ATTACHMENT_MIME_TYPES as readonly string[]).includes(value)
  );
}

/** Human-readable list for the rejection message. */
export function acceptedFormatsSentence(): string {
  return ATTACHMENT_MIME_TYPES.join(', ');
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

export interface UploadCandidate {
  fileName: string;
  /** The browser's claim about the type. Never trusted on its own. */
  mimeType: string;
  sizeBytes: number;
  /** First bytes of the file, for the content check. Optional. */
  header?: Uint8Array;
}

export type UploadRejection =
  | 'empty_file'
  | 'too_large'
  | 'unsupported_type'
  | 'content_mismatch'
  | 'missing_file_name';

export type UploadValidation =
  | { ok: true; mimeType: AttachmentMimeType; fileName: string }
  | { ok: false; reason: UploadRejection; message: string };

/**
 * Decides whether a submitted file may be stored.
 *
 * Order matters: size is checked before type so a 300 MB file is refused for
 * the reason the uploader can act on, rather than being told its format is
 * wrong. Both are refused before anything reaches storage — an upload that the
 * database would later reject has already cost the bandwidth.
 */
export function validateUpload(
  candidate: UploadCandidate,
  maxBytes: number,
): UploadValidation {
  const fileName = sanitiseFileName(candidate.fileName);
  if (!fileName) {
    return {
      ok: false,
      reason: 'missing_file_name',
      message: 'The file needs a name.',
    };
  }

  // `file_size > 0` is a table constraint; a zero-byte upload is almost always
  // a failed read on the client rather than a file anyone wants stored.
  if (candidate.sizeBytes <= 0) {
    return {
      ok: false,
      reason: 'empty_file',
      message: 'That file is empty, so there is nothing to store.',
    };
  }

  if (candidate.sizeBytes > maxBytes) {
    return {
      ok: false,
      reason: 'too_large',
      message:
        `That file is ${formatBytes(candidate.sizeBytes)}, over the ` +
        `${formatBytes(maxBytes)} limit for a single attachment.`,
    };
  }

  if (!isAttachmentMimeType(candidate.mimeType)) {
    return {
      ok: false,
      reason: 'unsupported_type',
      message:
        `Files of type "${candidate.mimeType || 'unknown'}" are not accepted. ` +
        `Accepted formats: ${acceptedFormatsSentence()}.`,
    };
  }

  // The declared type is supplied by the client, so a mislabelled file would
  // otherwise be stored under a type it is not. This does not make the file
  // safe — that is the scanner's job — it only stops the label lying.
  if (candidate.header) {
    const sniffed = sniffMimeType(candidate.header);
    if (sniffed && sniffed !== candidate.mimeType) {
      return {
        ok: false,
        reason: 'content_mismatch',
        message:
          `That file is labelled "${candidate.mimeType}" but its contents ` +
          `look like "${sniffed}". Please upload it with the correct format.`,
      };
    }
  }

  return { ok: true, mimeType: candidate.mimeType, fileName };
}

/**
 * Identifies a file from its leading bytes, or returns `null` when it cannot
 * say.
 *
 * Deliberately one-sided: it only ever reports a type it is confident about,
 * and silence means "no opinion", not "wrong". A sniffer that guessed would
 * reject legitimate uploads, and a rejected quarterly report is a support
 * ticket the uploader cannot resolve themselves.
 *
 * `text/csv` has no signature and is never reported. `xlsx` is a zip
 * container, so it is reported as itself rather than as a generic archive —
 * the only zip we accept.
 */
export function sniffMimeType(header: Uint8Array): AttachmentMimeType | null {
  if (startsWith(header, [0x25, 0x50, 0x44, 0x46, 0x2d])) {
    return 'application/pdf'; // %PDF-
  }
  if (startsWith(header, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) {
    return 'image/png';
  }
  if (startsWith(header, [0xff, 0xd8, 0xff])) {
    return 'image/jpeg';
  }
  if (
    startsWith(header, [0x52, 0x49, 0x46, 0x46]) && // RIFF
    startsWith(header.subarray(8), [0x57, 0x45, 0x42, 0x50]) // WEBP
  ) {
    return 'image/webp';
  }
  if (startsWith(header, [0x50, 0x4b, 0x03, 0x04])) {
    return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  }
  return null;
}

function startsWith(bytes: Uint8Array, signature: readonly number[]): boolean {
  if (bytes.length < signature.length) return false;
  for (let index = 0; index < signature.length; index += 1) {
    // `noUncheckedIndexedAccess` is on, so both sides are `number | undefined`
    // and the length guard above is what makes the comparison meaningful.
    if (bytes[index] !== signature[index]) return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// Naming and paths
// ---------------------------------------------------------------------------

const MAX_STORED_NAME_LENGTH = 96;

/**
 * Reduces an uploaded name to something safe to put in a storage key.
 *
 * A file name arrives from a browser and can contain path separators, control
 * characters or a leading dot. Storage keys are paths, so `../` in a name is a
 * traversal attempt and a leading dot is a hidden file; both are flattened
 * here rather than trusted. The original name is kept intact in
 * `attachments.file_name` and used for the download, so nothing user-visible
 * is lost by being strict about the key.
 */
export function sanitiseFileName(raw: string): string {
  const basename = raw.split(/[\\/]/).pop() ?? '';

  const cleaned = basename
    // Control characters are stripped rather than substituted: they carry no
    // meaning in a name and a dash for each would be noise.
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .replace(/[^A-Za-z0-9._-]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^[.\-]+/, '')
    .replace(/[.\-]+$/, '');

  if (!cleaned) return '';
  if (cleaned.length <= MAX_STORED_NAME_LENGTH) return cleaned;

  // Truncate the stem, not the extension: the extension is the part a
  // downloader's operating system uses to pick an application.
  const dot = cleaned.lastIndexOf('.');
  if (dot <= 0 || cleaned.length - dot > 12) {
    return cleaned.slice(0, MAX_STORED_NAME_LENGTH);
  }
  const extension = cleaned.slice(dot);
  const stem = cleaned.slice(0, dot);
  return (
    stem.slice(0, Math.max(1, MAX_STORED_NAME_LENGTH - extension.length)) +
    extension
  );
}

export type AttachmentParentType = 'opportunity' | 'report';

export interface AttachmentParent {
  type: AttachmentParentType;
  id: string;
}

/**
 * Builds the object key for a stored attachment.
 *
 * Grouped by parent so an operator looking at the bucket can see what a record
 * carries, and prefixed within that group by a random token so the key cannot
 * be guessed from the record's id alone. The bucket is private and every
 * download is signed, so the token is defence in depth rather than the
 * control — but it is the difference between one wrong policy leaking a file
 * and one wrong policy leaking the whole bucket.
 */
export function attachmentStoragePath(
  parent: AttachmentParent,
  token: string,
  fileName: string,
): string {
  const safeName = sanitiseFileName(fileName) || 'file';
  return `${parent.type}/${parent.id}/${token}-${safeName}`;
}

/** 128 bits of randomness, hex encoded. Impure, so it lives on its own. */
export function newStorageToken(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join(
    '',
  );
}

function formatBytes(bytes: number): string {
  const mib = bytes / (1024 * 1024);
  if (mib >= 1) return `${Math.round(mib * 10) / 10} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}
