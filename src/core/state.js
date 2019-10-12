/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
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
    isEditing: false,
  },
  color: {
    currentColor: 0,
    currentPalette: 0,
    palettes,
  },
  tool: {
    current: 0,
    items: [{ name: 'eyedropper' }, { name: 'pencil' }, { name: 'eraser' }],
  },
};

const state = U.atom(initialState);

export default state;
