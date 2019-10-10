/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module canvas-data
 * @namespace core
 */
import * as K from 'kefir';
import * as H from 'kefir.partial.lenses.history';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

import { COLOR_CHANNELS } from '../constants';

import * as T from './canvas-data.d';

//

/**
 * @type {T.CanvasData}
 */
const initValue = [];

const state = U.atom(H.init({ maxCount: 10, replacePeriod: 200 }, initValue));

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
