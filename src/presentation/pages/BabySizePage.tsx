import { Component } from 'react';
import { SYMBOLS, TEXT } from '../../constants/text';
import lime from '../assets/lime.svg';
import { Eyebrow } from '../components/Eyebrow';
import './BabySizePage.css';

export class BabySizePage extends Component {
  render() {
    return (
      <section className="baby-size" aria-labelledby="baby-size-title">
        <Eyebrow text={TEXT.babySize.eyebrow} />
        <h1 id="baby-size-title">
          {TEXT.babySize.title}<br /><em>{TEXT.babySize.titleAccent}</em>
        </h1>
        <p className="baby-size-intro">{TEXT.babySize.introduction}</p>
        <div className="size-card">
          <span className="size-card-label">{TEXT.babySize.cardLabel}</span>
          <img className="lime-illustration" src={lime} alt={TEXT.babySize.illustrationAlt} />
          <h2>{TEXT.babySize.comparison}</h2>
          <div className="size-badge">
            <span>{TEXT.babySize.sizeLabel}</span>
            <strong>{TEXT.babySize.size}</strong>
          </div>
        </div>
        <p className="baby-size-footer">
          <span aria-hidden="true">{SYMBOLS.heart}</span> {TEXT.babySize.footer}
        </p>
      </section>
    );
  }
}
