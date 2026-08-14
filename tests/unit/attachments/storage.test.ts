import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

import {
  ATTACHMENT_MIME_TYPES,
  attachmentStoragePath,
  isAttachmentMimeType,
  newStorageToken,
  sanitiseFileName,
  sniffMimeType,
  validateUpload,
} from '@/lib/attachments/storage';

/**
 * These are the checks that stand between a staff upload and the bucket, so
 * each case below is really asking one of two questions: could this get a file
 * stored that the database would then refuse, or could this get a file stored
 * under a path or a label that is not true of it.
 */

const MAX = 25 * 1024 * 1024;

function candidate(overrides: Partial<Parameters<typeof validateUpload>[0]>) {
  return validateUpload(
    {
      fileName: 'brief.pdf',
      mimeType: 'application/pdf',
      sizeBytes: 1024,
      ...overrides,
    },
    MAX,
  );
}

describe('accepted types', () => {
  it('matches the CHECK constraint in the migration exactly', () => {
    // The list exists in three places on purpose (see the module header). This
    // is the test that stops the copies drifting: it reads the constraint out
    // of the migration rather than restating it, so a format added to one and
    // not the other fails here rather than as a 500 in production.
    const sql = readFileSync(
      'supabase/migrations/20260101001200_reports_and_files.sql',
      'utf8',
    );
    const constraint = sql
      .split('constraint attachment_mime_allowed check (')[1]
      ?.split(')')[0];

    expect(constraint).toBeDefined();

    const inSql = Array.from(
      constraint?.matchAll(/'([^']+)'/g) ?? [],
      (match) => match[1],
    );

    expect(inSql.slice().sort()).toEqual(
      [...ATTACHMENT_MIME_TYPES].slice().sort(),
    );
  });

  it('recognises only the accepted types', () => {
    for (const type of ATTACHMENT_MIME_TYPES) {
      expect(isAttachmentMimeType(type)).toBe(true);
    }
    for (const type of [
      'application/zip',
      'application/x-msdownload',
      'text/html',
      'image/svg+xml',
      'application/pdf ',
      'APPLICATION/PDF',
      '',
      null,
      undefined,
      42,
    ]) {
      expect(isAttachmentMimeType(type)).toBe(false);
    }
  });
});

describe('validateUpload', () => {
  it('accepts an ordinary file', () => {
    const result = candidate({});
    expect(result.ok).toBe(true);
  });

  it('refuses a file over the ceiling, and says so in bytes the uploader saw', () => {
    const result = candidate({ sizeBytes: MAX + 1 });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.reason).toBe('too_large');
    expect(result.message).toContain('25 MB');
  });

  it('accepts a file exactly at the ceiling', () => {
    // Off-by-one here is the difference between a 25 MB limit and a 24.99 MB
    // one, which is the sort of thing only ever discovered by an uploader.
    expect(candidate({ sizeBytes: MAX }).ok).toBe(true);
  });

  it('refuses an empty file, which the table constraint would refuse anyway', () => {
    for (const size of [0, -1]) {
      const result = candidate({ sizeBytes: size });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.reason).toBe('empty_file');
    }
  });

  it('refuses an unaccepted type before the database has to', () => {
    const result = candidate({
      fileName: 'payload.exe',
      mimeType: 'application/x-msdownload',
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.reason).toBe('unsupported_type');
    // The message has to name the accepted formats or the uploader has no way
    // to act on it.
    expect(result.message).toContain('application/pdf');
  });

  it('refuses a missing type rather than treating it as unknown-but-fine', () => {
    const result = candidate({ mimeType: '' });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reason).toBe('unsupported_type');
  });

  it('checks size before type, so the actionable reason comes back', () => {
    const result = candidate({
      sizeBytes: MAX * 10,
      mimeType: 'application/zip',
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reason).toBe('too_large');
  });

  it('refuses a file whose contents contradict its declared type', () => {
    // The declared type comes from the browser. Storing an executable under
    // `image/png` would put a lie in the row every later consumer trusts.
    const result = candidate({
      fileName: 'logo.png',
      mimeType: 'image/png',
      header: new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x37]),
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reason).toBe('content_mismatch');
  });

  it('accepts a file whose contents agree with its declared type', () => {
    const result = candidate({
      fileName: 'logo.png',
      mimeType: 'image/png',
      header: new Uint8Array([
        0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00,
      ]),
    });
    expect(result.ok).toBe(true);
  });

  it('accepts a type it cannot sniff rather than guessing', () => {
    // CSV has no signature. Refusing on "no opinion" would reject every
    // spreadsheet export the product actually deals in.
    const result = candidate({
      fileName: 'prices.csv',
      mimeType: 'text/csv',
      header: new Uint8Array([0x63, 0x6f, 0x75, 0x6e, 0x74, 0x79, 0x2c]),
    });
    expect(result.ok).toBe(true);
  });

  it('refuses a file with no usable name', () => {
    for (const name of ['', '   ', '...', '/', '../']) {
      const result = candidate({ fileName: name });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.reason).toBe('missing_file_name');
    }
  });

  it('returns the sanitised name it wants stored', () => {
    const result = candidate({ fileName: 'Quarterly Report (final).pdf' });
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.fileName).toBe('Quarterly-Report-final-.pdf');
  });
});

describe('sniffMimeType', () => {
  it('identifies the binary formats from their signature', () => {
    expect(sniffMimeType(new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d]))).toBe(
      'application/pdf',
    );
    expect(
      sniffMimeType(
        new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
      ),
    ).toBe('image/png');
    expect(sniffMimeType(new Uint8Array([0xff, 0xd8, 0xff, 0xe0]))).toBe(
      'image/jpeg',
    );
    expect(
      sniffMimeType(new Uint8Array([0x50, 0x4b, 0x03, 0x04, 0x14, 0x00])),
    ).toBe('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  });

  it('requires both halves of the WEBP signature', () => {
    const riffOnly = new Uint8Array(12);
    riffOnly.set([0x52, 0x49, 0x46, 0x46], 0);
    expect(sniffMimeType(riffOnly)).toBeNull();

    const webp = new Uint8Array(12);
    webp.set([0x52, 0x49, 0x46, 0x46], 0);
    webp.set([0x57, 0x45, 0x42, 0x50], 8);
    expect(sniffMimeType(webp)).toBe('image/webp');
  });

  it('says nothing rather than guessing', () => {
    // Silence must mean "no opinion". If a truncated read ever produced a
    // confident wrong answer it would reject legitimate uploads.
    expect(sniffMimeType(new Uint8Array())).toBeNull();
    expect(sniffMimeType(new Uint8Array([0x25, 0x50]))).toBeNull();
    expect(
      sniffMimeType(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0x6f])),
    ).toBeNull();
  });
});

describe('sanitiseFileName', () => {
  it('keeps only characters that are safe in a storage key', () => {
    expect(sanitiseFileName('Site Plan v2.pdf')).toBe('Site-Plan-v2.pdf');
    expect(sanitiseFileName('rép&ort#1.csv')).toBe('r-p-ort-1.csv');
  });

  it('flattens a traversal attempt to its last segment', () => {
    // The name is a storage key component, so `../` in it is a path, not a
    // name. Nothing here should be able to climb out of the parent prefix.
    expect(sanitiseFileName('../../etc/passwd')).toBe('passwd');
    expect(sanitiseFileName('..\\..\\windows\\system32\\evil.pdf')).toBe(
      'evil.pdf',
    );
    expect(sanitiseFileName('folder/report.pdf')).toBe('report.pdf');
  });

  it('strips leading dots so nothing lands as a hidden file', () => {
    expect(sanitiseFileName('.env')).toBe('env');
    expect(sanitiseFileName('..hidden.pdf')).toBe('hidden.pdf');
  });

  it('removes control characters instead of substituting them', () => {
    expect(sanitiseFileName('re\u0007port.pdf')).toBe('report.pdf');
  });

  it('truncates a long name but keeps the extension', () => {
    const name = `${'a'.repeat(400)}.pdf`;
    const result = sanitiseFileName(name);
    expect(result.length).toBeLessThanOrEqual(96);
    expect(result.endsWith('.pdf')).toBe(true);
  });

  it('returns empty when there is nothing usable left', () => {
    expect(sanitiseFileName('')).toBe('');
    expect(sanitiseFileName('///')).toBe('');
    expect(sanitiseFileName('...')).toBe('');
  });
});

describe('attachmentStoragePath', () => {
  const parent = {
    type: 'opportunity' as const,
    id: '2f1c9b1e-0000-4000-8000-000000000001',
  };

  it('groups by parent and prefixes with the random token', () => {
    expect(attachmentStoragePath(parent, 'abc123', 'Site Plan.pdf')).toBe(
      'opportunity/2f1c9b1e-0000-4000-8000-000000000001/abc123-Site-Plan.pdf',
    );
  });

  it('keeps a hostile name inside the parent prefix', () => {
    // The whole point of sanitising the name: the key must stay three
    // segments deep whatever the uploader called the file.
    const path = attachmentStoragePath(parent, 'abc123', '../../secret.pdf');
    expect(path.split('/')).toHaveLength(3);
    expect(path).not.toContain('..');
    expect(path.startsWith(`opportunity/${parent.id}/`)).toBe(true);
  });

  it('still produces a usable key when the name sanitises to nothing', () => {
    const path = attachmentStoragePath(parent, 'abc123', '...');
    expect(path).toBe(
      'opportunity/2f1c9b1e-0000-4000-8000-000000000001/abc123-file',
    );
  });

  it('separates reports from opportunities', () => {
    expect(
      attachmentStoragePath({ type: 'report', id: 'r1' }, 't', 'a.pdf'),
    ).toBe('report/r1/t-a.pdf');
  });
});

describe('newStorageToken', () => {
  it('is long enough and different every time', () => {
    // The token is what makes a path unguessable. A short or repeating token
    // would turn one wrong storage policy into an enumerable bucket.
    const tokens = new Set(
      Array.from({ length: 200 }, () => newStorageToken()),
    );
    expect(tokens.size).toBe(200);
    for (const token of tokens) {
      expect(token).toMatch(/^[0-9a-f]{32}$/);
    }
  });
});
