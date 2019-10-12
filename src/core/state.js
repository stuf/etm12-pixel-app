/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[KT]"}] */
/**
 * @module state
 * @namespace core
 */
import * as U from 'karet.util';

import palettes from './palettes';

import * as T from './state.d';

/**
 * @type {T.IState}
 */
const initialState = {
  canvas: {
    size: [32, 32],
    scale: 16,
  },
  currentFile: {
    name: 'Untitled',
    createdAt: new Date(),
  },
  color: {
    currentColor: 0,
    currentPalette: 0,
    palettes,
  },
};

const state = U.atom(initialState);

export default state;
