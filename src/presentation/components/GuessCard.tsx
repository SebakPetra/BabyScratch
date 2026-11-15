import { Component } from 'react';
import { SYMBOLS, TEXT } from '../../constants/text';
import type { Guess } from '../../domain/game';
import babyGirl from '../assets/baby-girl.svg';
import babyBoy from '../assets/baby-boy.svg';
import './GuessCard.css';

interface GuessCardProps {
  guess: Guess;
  onSelect: (guess: Guess) => void;
}

const CHOICES: Record<Guess, { label: string; image: string }> = {
  girl: { label: TEXT.home.girl, image: babyGirl },
  boy: { label: TEXT.home.boy, image: babyBoy },
};

export class GuessCard extends Component<GuessCardProps> {
  private select = () => {
    this.props.onSelect(this.props.guess);
  };

  render() {
    const { guess } = this.props;
    const { label, image } = CHOICES[guess];

    return (
      <button className={`choice-card choice-card--${guess}`} type="button" onClick={this.select}>
        <span className="card-sparkle card-sparkle--one star-icon" aria-hidden="true" />
        <span className="card-sparkle card-sparkle--two" aria-hidden="true">{SYMBOLS.sparkle}</span>
        <img className="baby-illustration" src={image} alt="" />
        <span className="choice-kicker">{TEXT.home.choiceKicker}</span>
        <strong>{label}</strong>
        <span className="choice-action">{TEXT.home.choiceAction} <span aria-hidden="true">{SYMBOLS.arrowUp}</span></span>
      </button>
    );
  }
}
