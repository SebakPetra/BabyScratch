import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('the temporary baby size page', () => {
  it('shows the current lime comparison without the scratch game', () => {
    const page = renderToStaticMarkup(<App />);

    expect(page).toContain('Egy lime méretű');
    expect(page).toContain('5–6 cm');
    expect(page).not.toContain('Szerinted ki érkezik?');
    expect(page).not.toContain('<canvas');
  });
});
