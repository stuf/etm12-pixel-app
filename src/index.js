import * as React from 'karet';
import * as U from 'karet.util';
import { render } from 'react-dom';

import 'normalize.css';
import './index.scss';

import App from './App';

import * as serviceWorker from './serviceWorker';

const state = U.atom({
  canvas: {
    size: [32, 32],
    scale: 16,
  },
  color: {
    palettes: [
      {
        name: 'bgb',
        items: ['#081820', '#346856', '#88c070', '#e0f8d0'],
      },
    ],
  },
});

render(<App {...{ state }} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
