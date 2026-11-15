import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './presentation/App';
import { TEXT } from './constants/text';
import './presentation/global.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error(TEXT.errors.missingRoot);
}

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
