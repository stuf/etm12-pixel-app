/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module canvas-data
 * @namespace core
 */
import * as H from 'kefir.partial.lenses.history';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

import * as S from '../settings';

import * as T from './canvas-data.d';

//

/**
 * @type {T.CanvasData}
 */
const initValue = [];

const state = U.atom(
  H.init(
    { maxCount: S.history.maxCount, replacePeriod: S.history.replacePeriod },
    initValue,
  ),
);

export default state;

//

export const clearImage_ = () => U.view(L.elems, state).modify(R.always(0));

export const clearImage = () => clearImage_() || state;

/**
 * @param {number} w
 * @param {number} h
 */
export const resizeImage_ = (w, h) =>
  state.set(Array(w * h * S.canvas.colorChannels).fill(0));

/**
 * @param {number} w
 * @param {number} h
 */
export const resizeImage = (w, h) => resizeImage_(w, h) || state;
