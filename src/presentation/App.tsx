import { Component } from 'react';
import type { Guess } from '../domain/game';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';
import './App.css';

interface AppState {
  guess: Guess | null;
}

export class App extends Component<Record<string, never>, AppState> {
  state: AppState = { guess: null };

  private selectGuess = (guess: Guess) => {
    this.setState({ guess });
  };

  private reset = () => {
    this.setState({ guess: null });
  };

  render() {
    const { guess } = this.state;

    return (
      <div className={`app ${guess ? `app--${guess}` : ''}`}>
        <SiteHeader onReset={this.reset} />
        <main className="main-content">
          {guess === null
            ? <HomePage onSelectGuess={this.selectGuess} />
            : <GamePage key={guess} guess={guess} onReset={this.reset} />}
        </main>
        <SiteFooter />
      </div>
    );
  }
}
