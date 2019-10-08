/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[KT]"}] */
/**
 * @module state
 * @namespace core
 */
import * as U from 'karet.util';
// eslint-disable-next-line
import * as K from 'kefir';
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
    palettes: [
      {
        name: 'bgb',
        items: ['#081820', '#346856', '#88c070', '#e0f8d0'],
      },
    ],
  },
  menu: [
    { label: 'Save', disabled: true },
    { label: 'Load', disabled: true },
    { label: 'Undo', disabled: true },
    { label: 'Redo', disabled: true },
  ],
};

const state = U.atom(initialState);

export default state;
