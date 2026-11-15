import { describe, expect, it } from 'vitest';
import { isCoverRevealed } from './scratchCoverage';
import { SCRATCH_HEIGHT, SCRATCH_WIDTH } from './scratchSettings';

describe('isCoverRevealed', () => {
  it('reveals only after at least 45% of the cover is scratched', () => {
    const pixels = new Uint8ClampedArray(SCRATCH_WIDTH * SCRATCH_HEIGHT * 4).fill(255);
    const requiredPixels = SCRATCH_WIDTH * SCRATCH_HEIGHT * 0.45;

    for (let index = 0; index < requiredPixels - 1; index++) {
      pixels[index * 4 + 3] = 127;
    }

    expect(isCoverRevealed(pixels)).toBe(false);
    pixels[(requiredPixels - 1) * 4 + 3] = 127;
    expect(isCoverRevealed(pixels)).toBe(true);
    pixels[(requiredPixels - 1) * 4 + 3] = 128;
    expect(isCoverRevealed(pixels)).toBe(false);
  });
});
