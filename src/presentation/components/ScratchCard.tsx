import { Component, createRef } from 'react';
import type { PointerEvent } from 'react';
import { SYMBOLS, TEXT } from '../../constants/text';
import type { GameResult } from '../../domain/game';
import { ScratchController } from './ScratchController';
import type { IScratchController } from './ScratchController';
import { SCRATCH_HEIGHT, SCRATCH_WIDTH } from './scratchSettings';
import './ScratchCard.css';

interface ScratchCardProps {
  result: GameResult;
}

interface ScratchCardState {
  revealed: boolean;
}

export class ScratchCard extends Component<ScratchCardProps, ScratchCardState> {
  state: ScratchCardState = { revealed: false };
  private readonly canvasRef = createRef<HTMLCanvasElement>();
  private controller: IScratchController | null = null;

  componentDidMount() {
    if (!this.canvasRef.current) {
      throw new Error(TEXT.errors.missingCanvas);
    }
    this.controller = new ScratchController(this.canvasRef.current, this.reveal);
  }

  private handlePointerDown = (event: PointerEvent<HTMLCanvasElement>) => {
    this.controller?.start(event.nativeEvent);
  };

  private handlePointerMove = (event: PointerEvent<HTMLCanvasElement>) => {
    this.controller?.move(event.nativeEvent);
  };

  private handlePointerEnd = (event: PointerEvent<HTMLCanvasElement>) => {
    this.controller?.end(event.nativeEvent);
  };

  private reveal = () => {
    this.controller?.reset();
    this.setState({ revealed: true });
  };

  render() {
    const { result } = this.props;
    const { revealed } = this.state;
    const message = result.isWinner ? TEXT.game.won : TEXT.game.lost;

    return (
      <div className="scratch-wrapper">
        <div className="scratch-card">
          <div className="scratch-result" aria-hidden={!revealed}>
            <span className="result-sparkle" aria-hidden="true">{SYMBOLS.sparkle}</span>
            <span className="result-eyebrow">{TEXT.game.resultHeading}</span>
            <strong>{message}</strong>
            <span>{result.isWinner ? TEXT.game.wonDetail : TEXT.game.lostDetail}</span>
          </div>
          {!revealed && (
            <canvas
              ref={this.canvasRef}
              className="scratch-cover"
              width={SCRATCH_WIDTH}
              height={SCRATCH_HEIGHT}
              onPointerDown={this.handlePointerDown}
              onPointerMove={this.handlePointerMove}
              onPointerUp={this.handlePointerEnd}
              onPointerCancel={this.handlePointerEnd}
              onLostPointerCapture={this.handlePointerEnd}
              aria-hidden="true"
            />
          )}
        </div>
        <div className="sr-only" aria-live="polite">
          {revealed ? message : ''}
        </div>
        {!revealed && (
          <button className="reveal-link" type="button" onClick={this.reveal}>
            {TEXT.game.reveal}
          </button>
        )}
      </div>
    );
  }
}
