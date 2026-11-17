import { Component } from 'react';
import { SYMBOLS, TEXT } from '../../constants/text';
import turorudi from '../assets/turorudi.png';
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
          <img className="size-illustration" src={turorudi} alt={TEXT.babySize.illustrationAlt} />
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
