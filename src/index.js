import * as React from 'karet';
import { render } from 'react-dom';

import 'normalize.css';
import './index.scss';

import App from './App';
import state from './core/state';

import * as serviceWorker from './serviceWorker';

render(<App {...{ state }} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
