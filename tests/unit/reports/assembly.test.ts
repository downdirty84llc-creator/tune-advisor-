import { describe, expect, it } from 'vitest';

import {
  selectWeeklyReportCandidates,
  weeklyReportTitle,
} from '@/lib/reports/assembly';

describe('selectWeeklyReportCandidates', () => {
  it('ranks by score descending', () => {
    const selected = selectWeeklyReportCandidates(
      [
        { id: 'a', score: 40, minimumAccessRank: 0 },
        { id: 'b', score: 90, minimumAccessRank: 10 },
        { id: 'c', score: 65, minimumAccessRank: 20 },
      ],
      10,
    );
    expect(selected.map((entry) => entry.opportunityId)).toEqual([
      'b',
      'c',
      'a',
    ]);
    expect(selected.map((entry) => entry.displayOrder)).toEqual([0, 1, 2]);
  });

  it('sorts unscored records last', () => {
    const selected = selectWeeklyReportCandidates(
      [
        { id: 'a', score: null, minimumAccessRank: 0 },
        { id: 'b', score: 50, minimumAccessRank: 0 },
      ],
      10,
    );
    expect(selected.map((entry) => entry.opportunityId)).toEqual(['b', 'a']);
  });

  it('breaks ties on id for a stable order', () => {
    const selected = selectWeeklyReportCandidates(
      [
        { id: 'z', score: 50, minimumAccessRank: 0 },
        { id: 'a', score: 50, minimumAccessRank: 0 },
      ],
      10,
    );
    expect(selected.map((entry) => entry.opportunityId)).toEqual(['a', 'z']);
  });

  it('respects the limit', () => {
    const selected = selectWeeklyReportCandidates(
      Array.from({ length: 20 }, (_, index) => ({
        id: `id-${index}`,
        score: index,
        minimumAccessRank: 0,
      })),
      5,
    );
    expect(selected).toHaveLength(5);
  });

  it('carries the access rank through unchanged', () => {
    const selected = selectWeeklyReportCandidates(
      [{ id: 'a', score: 50, minimumAccessRank: 30 }],
      10,
    );
    expect(selected[0]?.minimumAccessRank).toBe(30);
  });
});

describe('weeklyReportTitle', () => {
  it('formats the period as a readable range', () => {
    const title = weeklyReportTitle(
      new Date('2026-07-27T00:00:00Z'),
      new Date('2026-08-03T00:00:00Z'),
    );
    expect(title).toBe('Weekly Ledger — Jul 27 to Aug 3, 2026');
  });
});
