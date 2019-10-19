import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';
import { render } from 'react-dom';

import 'normalize.css';
import './index.scss';

import Main from './Main';
import state from './core/state';
import canvasData from './core/canvas-data';
import { menuItems } from './core/menu';

import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV !== 'production') {
  Object.assign(window, { U, R, L });
}

render(
  <Main {...{ state, canvasData, menuItems, env: process.env }} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
