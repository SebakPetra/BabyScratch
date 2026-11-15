import { Component } from 'react';
import { SYMBOLS, TEXT } from '../../constants/text';

export class SiteHeader extends Component {
  render() {
    return (
      <header className="site-header">
        <span className="brand" aria-label={TEXT.app.brandLabel}>
          <span className="brand-icon star-icon" aria-hidden="true" />
          <span>
            {TEXT.app.brandStart}
            <span className="brand-accent">{TEXT.app.brandEnd}</span>
            <span className="brand-dot">{TEXT.app.brandDot}</span>
          </span>
        </span>
        <div className="header-note">
          <span aria-hidden="true">{SYMBOLS.heart}</span> {TEXT.app.headerNote}
        </div>
      </header>
    );
  }
}
