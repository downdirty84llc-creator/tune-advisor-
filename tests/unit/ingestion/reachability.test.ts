import { describe, expect, it } from 'vitest';

import { classifyStatusCode } from '@/lib/ingestion/reachability';

describe('classifyStatusCode', () => {
  it('treats 2xx and redirects as ok', () => {
    expect(classifyStatusCode(200)).toBe('ok');
    expect(classifyStatusCode(204)).toBe('ok');
    expect(classifyStatusCode(301)).toBe('ok');
  });

  it('treats auth and rate-limit responses as access_denied', () => {
    expect(classifyStatusCode(401)).toBe('access_denied');
    expect(classifyStatusCode(403)).toBe('access_denied');
    expect(classifyStatusCode(429)).toBe('access_denied');
  });

  it('treats other client and server errors as unreachable', () => {
    expect(classifyStatusCode(404)).toBe('unreachable');
    expect(classifyStatusCode(500)).toBe('unreachable');
    expect(classifyStatusCode(503)).toBe('unreachable');
  });
});
