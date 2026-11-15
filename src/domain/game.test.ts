import { describe, expect, it } from 'vitest';
import { getGameResult } from './game';

describe('getGameResult', () => {
  it('awards a winning result for a girl guess', () => {
    expect(getGameResult('girl')).toEqual({
      guess: 'girl',
      isWinner: true,
    });
  });

  it('returns a losing result for a boy guess', () => {
    expect(getGameResult('boy')).toEqual({
      guess: 'boy',
      isWinner: false,
    });
  });
});
