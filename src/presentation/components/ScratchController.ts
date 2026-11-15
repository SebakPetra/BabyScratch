import { TEXT } from '../../constants/text';
import { ScratchCoverPainter } from './ScratchCoverPainter';
import { isCoverRevealed } from './scratchCoverage';
import { BRUSH_SIZE, SCRATCH_HEIGHT, SCRATCH_WIDTH } from './scratchSettings';

export interface IScratchController {
  start(event: PointerEvent): void;
  move(event: PointerEvent): void;
  end(event: PointerEvent): void;
  reset(): void;
}

export class ScratchController implements IScratchController {
  private readonly context: CanvasRenderingContext2D;
  private activePointer: number | null = null;
  private previousPoint: { x: number; y: number } | null = null;

  constructor(private readonly canvas: HTMLCanvasElement, private readonly onReveal: () => void) {
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) {
      throw new Error(TEXT.errors.missingCanvas);
    }
    this.context = context;
    new ScratchCoverPainter(canvas, context).paint();
  }

  private scratch(event: PointerEvent) {
    const rect = this.canvas.getBoundingClientRect();
    const point = {
      x: (event.clientX - rect.left) * SCRATCH_WIDTH / rect.width,
      y: (event.clientY - rect.top) * SCRATCH_HEIGHT / rect.height,
    };
    const previous = this.previousPoint ?? point;
    this.context.globalCompositeOperation = 'destination-out';
    this.context.lineWidth = BRUSH_SIZE * 2;
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
    this.context.beginPath();
    this.context.moveTo(previous.x, previous.y);
    this.context.lineTo(point.x, point.y);
    this.context.stroke();
    this.previousPoint = point;
  }

  start(event: PointerEvent) {
    if (this.activePointer !== null || (event.pointerType === 'mouse' && event.button !== 0)) {
      return;
    }
    event.preventDefault();
    this.activePointer = event.pointerId;
    this.canvas.setPointerCapture(event.pointerId);
    this.scratch(event);
  }

  move(event: PointerEvent) {
    if (this.activePointer === event.pointerId) {
      this.scratch(event);
    }
  }

  end(event: PointerEvent) {
    if (this.activePointer !== event.pointerId) {
      return;
    }
    this.reset();
    const pixels = this.context.getImageData(0, 0, SCRATCH_WIDTH, SCRATCH_HEIGHT).data;
    if (isCoverRevealed(pixels)) {
      this.onReveal();
    }
  }

  reset() {
    this.activePointer = null;
    this.previousPoint = null;
  }
}
