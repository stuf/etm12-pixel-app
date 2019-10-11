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
      {
        name: 'aap-micro12',
        items: [
          '#040303',
          '#1c1618',
          '#47416b',
          '#6c8c50',
          '#e3d245',
          '#d88038',
          '#a13d3b',
          '#4e282e',
          '#9a407e',
          '#f0d472',
          '#f9f5ef',
          '#8a8fc4',
        ],
      },
    ],
  },
};

const state = U.atom(initialState);

export default state;
