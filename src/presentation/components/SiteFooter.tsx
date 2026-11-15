import { Component } from 'react';
import { SYMBOLS, TEXT } from '../../constants/text';

export class SiteFooter extends Component {
  render() {
    return (
      <footer className="site-footer">
        <span>{TEXT.app.footerFirst}</span>
        <span>{TEXT.app.footerSecond} <b aria-hidden="true">{SYMBOLS.heart}</b></span>
      </footer>
    );
  }
}
