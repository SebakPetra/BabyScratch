import { Component } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { BabySizePage } from './pages/BabySizePage';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <SiteHeader />
        <main className="main-content">
          <BabySizePage />
        </main>
        <SiteFooter />
      </div>
    );
  }
}
