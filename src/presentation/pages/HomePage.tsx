import { Component } from 'react';
import { SYMBOLS, TEXT } from '../../constants/text';
import type { Guess } from '../../domain/game';
import { Eyebrow } from '../components/Eyebrow';
import { GuessCard } from '../components/GuessCard';
import './HomePage.css';

interface HomePageProps {
  onSelectGuess: (guess: Guess) => void;
}

export class HomePage extends Component<HomePageProps> {
  render() {
    return (
      <section className="home" aria-labelledby="home-title">
        <Eyebrow text={TEXT.home.eyebrow} />
        <h1 id="home-title">{TEXT.home.title}<br /><em>{TEXT.home.titleAccent}</em></h1>
        <p className="intro">{TEXT.home.introFirst}<br className="desktop-break" /> {TEXT.home.introSecond}</p>
        <div className="question"><span></span><h2>{TEXT.home.question}</h2><span></span></div>
        <div className="choice-grid">
          <GuessCard guess="girl" onSelect={this.props.onSelectGuess} />
          <GuessCard guess="boy" onSelect={this.props.onSelectGuess} />
        </div>
        <p className="home-hint"><span aria-hidden="true">{SYMBOLS.heart}</span> {TEXT.home.hint}</p>
        <span className="floating-sparkle floating-sparkle--left" aria-hidden="true" />
        <span className="floating-sparkle floating-sparkle--right" aria-hidden="true" />
      </section>
    );
  }
}
