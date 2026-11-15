import { Component } from 'react';
import { SYMBOLS } from '../../constants/text';

interface EyebrowProps {
  text: string;
}

export class Eyebrow extends Component<EyebrowProps> {
  render() {
    return (
      <div className="eyebrow">
        <span aria-hidden="true">{SYMBOLS.sparkle}</span>
        {' '}{this.props.text}{' '}
        <span aria-hidden="true">{SYMBOLS.sparkle}</span>
      </div>
    );
  }
}
