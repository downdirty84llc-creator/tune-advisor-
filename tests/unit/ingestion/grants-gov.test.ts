import { describe, expect, it } from 'vitest';

import { parseGrantsGovResponse } from '@/lib/ingestion/grants-gov';

describe('parseGrantsGovResponse', () => {
  it('maps a hit into a draft-shaped candidate', () => {
    const candidates = parseGrantsGovResponse({
      data: {
        hitCount: 1,
        oppHits: [
          {
            id: 358214,
            number: 'USDA-RD-2026-01',
            title: 'Rural Business Development Grants',
            agency: 'Department of Agriculture',
            openDate: '07/01/2026',
            closeDate: '09/30/2026',
            oppStatus: 'posted',
          },
        ],
      },
    });

    expect(candidates).toHaveLength(1);
    expect(candidates[0]).toMatchObject({
      externalId: '358214',
      title: 'Rural Business Development Grants',
      category: 'business_funding',
      subtype: 'grant',
      originalSourceUrl: 'https://grants.gov/search-results-detail/358214',
      openingDate: '2026-07-01',
      closingDate: '2026-09-30',
    });
    expect(candidates[0]?.summary).toContain('Department of Agriculture');
    expect(candidates[0]?.summary).toContain('not yet reviewed');
  });

  it('skips a hit with no id or no title', () => {
    const candidates = parseGrantsGovResponse({
      data: {
        oppHits: [{ id: 1, title: '' }, { title: 'No id here' }, { id: 2 }],
      },
    });
    expect(candidates).toHaveLength(0);
  });

  it('leaves dates null when the source format is unrecognised', () => {
    const candidates = parseGrantsGovResponse({
      data: {
        oppHits: [
          {
            id: 9,
            title: 'Odd date format',
            openDate: '2026-07-01',
            closeDate: null,
          },
        ],
      },
    });
    expect(candidates[0]?.openingDate).toBeNull();
    expect(candidates[0]?.closingDate).toBeNull();
  });

  it('returns an empty array for a malformed or empty response', () => {
    expect(parseGrantsGovResponse(null)).toEqual([]);
    expect(parseGrantsGovResponse({})).toEqual([]);
    expect(parseGrantsGovResponse({ data: {} })).toEqual([]);
    expect(
      parseGrantsGovResponse({ data: { oppHits: 'not-an-array' } }),
    ).toEqual([]);
  });
});
