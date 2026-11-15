export type Guess = 'girl' | 'boy';

export interface GameResult {
  guess: Guess;
  isWinner: boolean;
}

export function getGameResult(guess: Guess): GameResult {
  const isWinner = guess === 'girl';

  return {
    guess,
    isWinner,
  };
}

