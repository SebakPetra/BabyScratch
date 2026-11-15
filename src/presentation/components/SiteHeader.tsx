import { Component } from 'react';
import { SYMBOLS, TEXT } from '../../constants/text';

interface SiteHeaderProps {
  onReset: () => void;
}

export class SiteHeader extends Component<SiteHeaderProps> {
  render() {
    return (
      <header className="site-header">
        <button className="brand" type="button" onClick={this.props.onReset} aria-label={TEXT.app.homeLabel}>
          <span className="brand-icon" aria-hidden="true">{SYMBOLS.brand}</span>
          <span>
            {TEXT.app.brandStart}
            <span className="brand-accent">{TEXT.app.brandEnd}</span>
            <span className="brand-dot">{TEXT.app.brandDot}</span>
          </span>
        </button>
        <div className="header-note">
          <span aria-hidden="true">{SYMBOLS.heart}</span> {TEXT.app.headerNote}
        </div>
      </header>
    );
  }
}
