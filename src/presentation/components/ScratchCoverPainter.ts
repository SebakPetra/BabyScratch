import { SYMBOLS, TEXT } from '../../constants/text';
import { SCRATCH_HEIGHT, SCRATCH_WIDTH } from './scratchSettings';

const DOT_START = 18;
const DOT_SPACING = 34;
const DOT_RADIUS = 1.5;

export class ScratchCoverPainter {
  private readonly style: CSSStyleDeclaration;

  constructor(canvas: HTMLCanvasElement, private readonly context: CanvasRenderingContext2D) {
    this.style = getComputedStyle(canvas);
  }

  paint() {
    this.paintBackground();
    this.paintDots();
    this.paintText();
  }

  private styleValue(name: string) {
    return this.style.getPropertyValue(name).trim();
  }

  private paintBackground() {
    const gradient = this.context.createLinearGradient(0, 0, SCRATCH_WIDTH, SCRATCH_HEIGHT);
    gradient.addColorStop(0, this.styleValue('--cover-start'));
    gradient.addColorStop(0.5, this.styleValue('--cover-middle'));
    gradient.addColorStop(1, this.styleValue('--cover-end'));
    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, SCRATCH_WIDTH, SCRATCH_HEIGHT);
  }

  private paintDots() {
    const columns = Math.ceil((SCRATCH_WIDTH - DOT_START) / DOT_SPACING);
    const rows = Math.ceil((SCRATCH_HEIGHT - DOT_START) / DOT_SPACING);
    const positions = Array.from({ length: columns * rows }, (_, index) => {
      const row = Math.floor(index / columns);
      const column = index % columns;
      return {
        x: DOT_START + column * DOT_SPACING + (row % 2) * (DOT_SPACING / 2),
        y: DOT_START + row * DOT_SPACING,
      };
    });

    this.context.fillStyle = this.styleValue('--cover-dots');
    positions.forEach(({ x, y }) => {
      this.context.beginPath();
      this.context.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
      this.context.fill();
    });
  }

  private paintText() {
    this.context.textAlign = 'center';
    this.context.fillStyle = this.styleValue('--cover-text');
    this.drawText(SYMBOLS.outlineSparkle, '--cover-symbol-font', 105);
    this.drawText(TEXT.game.coverTitle, '--cover-title-font', 155);
    this.drawText(TEXT.game.coverAction, '--cover-action-font', 190);
  }

  private drawText(text: string, fontProperty: string, y: number) {
    this.context.font = this.styleValue(fontProperty);
    this.context.fillText(text, SCRATCH_WIDTH / 2, y);
  }
}
