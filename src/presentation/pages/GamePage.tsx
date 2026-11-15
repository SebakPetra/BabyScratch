import { Component } from 'react';
import { SYMBOLS, TEXT } from '../../constants/text';
import { getGameResult } from '../../domain/game';
import type { Guess } from '../../domain/game';
import { Eyebrow } from '../components/Eyebrow';
import { ScratchCard } from '../components/ScratchCard';
import './GamePage.css';

interface GamePageProps {
  guess: Guess;
  onReset: () => void;
}

export class GamePage extends Component<GamePageProps> {
  render() {
    const { guess, onReset } = this.props;
    const guessText = guess === 'girl' ? TEXT.game.girlGuess : TEXT.game.boyGuess;

    return (
      <section className="game" aria-labelledby="game-title">
        <button className="back-button" type="button" onClick={onReset}>
          <span aria-hidden="true">{SYMBOLS.arrowBack}</span> {TEXT.game.back}
        </button>
        <Eyebrow text={TEXT.game.eyebrow} />
        <h1 id="game-title">{TEXT.game.titleStart} <em>{guessText}</em><br />{TEXT.game.titleEnd}</h1>
        <p className="intro">{TEXT.game.intro}</p>
        <div className="game-card">
          <div className="game-card-heading">
            <span className="mini-heart" aria-hidden="true">{SYMBOLS.heart}</span>
            <span>{TEXT.game.cardHeading}</span>
            <span className="mini-heart" aria-hidden="true">{SYMBOLS.heart}</span>
          </div>
          <ScratchCard result={getGameResult(guess)} />
        </div>
        <p className="game-footer">{TEXT.game.footer} <span aria-hidden="true">{SYMBOLS.heart}</span></p>
      </section>
    );
  }
}
