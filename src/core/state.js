/**
 * @module state
 * @namespace core
 */
import * as U from 'karet.util';
// eslint-disable-next-line
import * as K from 'kefir';
import * as T from './models.d';

/**
 * @type {IState}
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
    { label: 'Save' },
    { label: 'Load' },
    { label: 'Undo' },
    { label: 'Redo' },
  ],
};

/**
 * @type {K.Property<IState, never>}
 */
const state = U.atom(initialState);

export default state;
