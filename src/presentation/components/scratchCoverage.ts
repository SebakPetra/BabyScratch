import { REVEAL_THRESHOLD, SCRATCH_HEIGHT, SCRATCH_WIDTH } from './scratchSettings';

const ALPHA_OFFSET = 3;
const CHANNELS_PER_PIXEL = 4;
const CLEARED_ALPHA = 128;

export function isCoverRevealed(pixels: Uint8ClampedArray): boolean {
  let clearedPixels = 0;

  for (let index = ALPHA_OFFSET; index < pixels.length; index += CHANNELS_PER_PIXEL) {
    clearedPixels += Number(pixels[index] < CLEARED_ALPHA);
  }

  return clearedPixels / (SCRATCH_WIDTH * SCRATCH_HEIGHT) >= REVEAL_THRESHOLD;
}
