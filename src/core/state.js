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
        name: 'pear36',
        items: [
          '#5e315b',
          '#8c3f5d',
          '#ba6156',
          '#f2a65e',
          '#ffe478',
          '#cfff70',
          '#8fde5d',
          '#3ca370',
          '#3d6e70',
          '#323e4f',
          '#322947',
          '#473b78',
          '#4b5bab',
          '#4da6ff',
          '#66ffe3',
          '#ffffeb',
          '#c2c2d1',
          '#7e7e8f',
          '#606070',
          '#43434f',
          '#272736',
          '#3e2347',
          '#57294b',
          '#964253',
          '#e36956',
          '#ffb570',
          '#ff9166',
          '#eb564b',
          '#b0305c',
          '#73275c',
          '#422445',
          '#5a265e',
          '#80366b',
          '#bd4882',
          '#ff6b97',
          '#ffb5b5',
        ],
      },
      {
        name: 'cave rock',
        items: [
          '#33337f',
          '#2188cf',
          '#ffffff',
          '#4891aa',
          '#244855',
          '#80350e',
          '#ff9f46',
          '#b6b6aa',
        ],
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
