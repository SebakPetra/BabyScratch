import { Component } from 'react';
import { TEXT } from '../../constants/text';

export class SiteFooter extends Component {
  render() {
    return (
      <footer className="site-footer">
        <span>{TEXT.app.footerFirst}</span>
      </footer>
    );
  }
}
