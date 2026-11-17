import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('the temporary baby size page', () => {
  it('shows the current baby size comparison without the scratch game', () => {
    const page = renderToStaticMarkup(<App />);

    expect(page).toContain('BabyDiary');
    expect(page).not.toContain('BabyScratch');
    expect(page).toContain('Egy túrórudi méretű');
    expect(page).toContain('7 cm');
    expect(page).toContain('turorudi.png');
    expect(page).toContain('alt="Pöttyös Túró Rudi natúr, pöttyös csomagolásban"');
    expect(page).not.toContain('Szerinted ki érkezik?');
    expect(page).not.toContain('<canvas');
  });
});
