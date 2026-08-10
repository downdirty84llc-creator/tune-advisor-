import { describe, expect, it } from 'vitest';

import {
  canServeAttachment,
  configuredProvider,
  interpretStats,
  isScanStatus,
  SCAN_STATUSES,
} from '@/lib/attachments/scanning';

/**
 * The serving gate is the actual control, so it is tested hardest. A scanner
 * that classifies files but never withholds one is decoration; every case
 * below is really asking "could this state let a bad file out".
 */

describe('canServeAttachment', () => {
  it('serves only a clean result', () => {
    expect(canServeAttachment('clean').allowed).toBe(true);

    for (const status of SCAN_STATUSES.filter((s) => s !== 'clean')) {
      expect(canServeAttachment(status).allowed).toBe(false);
    }
  });

  it('refuses anything it does not recognise', () => {
    // The important case: a column default changed, a typo, a new status added
    // without updating this file. Unknown must never mean servable.
    for (const value of [
      undefined,
      null,
      '',
      'CLEAN',
      'ok',
      'passed',
      0,
      1,
      true,
      {},
    ]) {
      const decision = canServeAttachment(value);
      expect(decision.allowed).toBe(false);
      expect(decision.reason).toBe('unknown');
    }
  });

  it('distinguishes infected from merely unscanned, so the message is honest', () => {
    expect(canServeAttachment('infected').reason).toBe('infected');
    expect(canServeAttachment('pending').reason).toBe('not_yet_scanned');
    expect(canServeAttachment('scanning').reason).toBe('not_yet_scanned');
    expect(canServeAttachment('failed').reason).toBe('scan_failed');
  });

  it('does not serve a skipped file, even though skipping was deliberate', () => {
    // `skipped` records an operator decision not to scan. It is still not a
    // clean result.
    expect(canServeAttachment('skipped').allowed).toBe(false);
  });

  it('gives a member-facing sentence for every refusal', () => {
    for (const status of SCAN_STATUSES.filter((s) => s !== 'clean')) {
      expect(canServeAttachment(status).message.length).toBeGreaterThan(10);
    }
  });
});

describe('isScanStatus', () => {
  it('accepts exactly the known statuses', () => {
    for (const status of SCAN_STATUSES) expect(isScanStatus(status)).toBe(true);
    expect(isScanStatus('quarantined')).toBe(false);
  });
});

describe('interpretStats', () => {
  it('treats any malicious detection as infected', () => {
    expect(interpretStats({ malicious: 1, harmless: 60 })).toBe('infected');
  });

  it('does not clear a file that only engines find suspicious', () => {
    // Not infected, but not clean either — it lands somewhere unservable and
    // puts a human in the loop.
    expect(interpretStats({ malicious: 0, suspicious: 2, harmless: 50 })).toBe(
      'failed',
    );
  });

  it('clears a file no engine objected to', () => {
    expect(interpretStats({ malicious: 0, suspicious: 0, harmless: 70 })).toBe(
      'clean',
    );
    expect(
      interpretStats({ malicious: 0, suspicious: 0, harmless: 0, undetected: 70 }),
    ).toBe('clean');
  });

  it('fails rather than clears when no engine reported at all', () => {
    // Zero engines is not a clean bill of health.
    expect(interpretStats({ malicious: 0, suspicious: 0 })).toBe('failed');
    expect(interpretStats(undefined)).toBe('failed');
  });
});

describe('configuredProvider', () => {
  it('defaults to none for anything unrecognised', () => {
    expect(configuredProvider(undefined)).toBe('none');
    expect(configuredProvider('')).toBe('none');
    expect(configuredProvider('clamav')).toBe('none');
    expect(configuredProvider('virustotal')).toBe('virustotal');
  });
});
