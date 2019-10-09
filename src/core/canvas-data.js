/**
 * @module canvas-data
 * @namespace core
 */
// eslint-disable-next-line
import * as K from 'kefir';
import * as H from 'kefir.partial.lenses.history';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

import { COLOR_CHANNELS } from '../constants';

import * as T from './canvas-data.d';

//

/**
 * @type {K.Property<T.HistoryL<number[]>, any>}
 */
const state = U.atom(H.init({ replacePeriod: 200 }, []));

export default state;

//

/**
 * @return {void}
 * @deprecated
 */
export const clearImage_ = () => U.view(L.elems, state).modify(R.always(0));

/**
 * @return {typeof state}
 * @deprecated
 */
export const clearImage = () => clearImage_() || state;

/**
 * @param {number} w
 * @param {number} h
 * @return {void}
 */
export const resizeImage_ = (w, h) =>
  state.set(Array(w * h * COLOR_CHANNELS).fill(0));

/**
 * @param {number} w
 * @param {number} h
 * @return {typeof state}
 */
export const resizeImage = (w, h) => resizeImage_(w, h) || state;

//

/**
 * @return {K.Property<Uint8ClampedArray, any>}
 */
export const asUint8 = () => state.map(R.constructN(1, Uint8ClampedArray));

if (process.env.NODE_ENV === 'development') {
  state.debounce(200).log('canvas image data');
}
