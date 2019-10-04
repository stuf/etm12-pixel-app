/**
 * @module state
 * @namespace core
 */
import * as U from 'karet.util';
// eslint-disable-next-line
import * as K from 'kefir';

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
};

/**
 * @type {K.Property<typeof initialState, never>}
 */
const state = U.atom(initialState);

export default state;
