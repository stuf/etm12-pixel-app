/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K]"}] */
import * as U from 'karet.util';
import * as R from 'ramda';
import * as I from 'infestines';
import * as K from 'kefir';

// eslint-disable-next-line
const setName = process.env.NODE_ENV === 'production' ? a => a : I.defineNameU;

// FUNCTIONS

export const takeAll = R.unapply(R.identity);

// CONSTANTS

const Pos = {
  PAGE: ['pageX', 'pageY'],
  OFFSET: ['offsetX', 'offsetY'],
  SCREEN: ['screenX', 'screenY'],
  LAYER: ['layerX', 'layerY'],
};

// ARITHMETIC

/**
 * @param {number} n
 * @return {number}
 */
export const reciprocal = n => Math.pow(n, -1);

/**
 * @type {Ary1Lift<number, number>}
 */
export const reciprocalU = setName(U.lift(reciprocal), 'reciprocalU');

/**
 * @type {(size: MaybeObservable<[number, number]>, scale: MaybeObservable<number>) => K.Observable<[number, number]>}
 */
export const scaleSize = U.lift(([w, h], m) => [w * m, h * m]);

// COORDINATES

/**
 * @type {PosTransform}
 */
export const layerPos = U.mapValue(R.props(Pos.LAYER));

/**
 * @type {PosTransform}
 */
export const screenPos = U.mapValue(R.props(Pos.SCREEN));

/**
 * @type {PosTransform}
 */
export const pagePos = U.mapValue(R.props(Pos.PAGE));

// COLORS

/**
 *
 * @param {string} x
 * @return {[numbber, number, number, number]}
 */
export const fromHex = x => {
  const n = parseInt(x, 16);
  return [(n & 0xff0000) >> 16, (n & 0xff00) >> 8, n & 0xff, 255];
};

// CANVAS

/**
 * @type {Ary1Lift<HTMLCanvasElement, CanvasRenderingContext2D>}
 */
export const getContext = U.lift(el => el.getContext('2d'));

//

/**
 * @template T
 * @typedef {K.Observable<T, any> | T} MaybeObservable
 */

/**
 * @typedef {(x: (K.Observable<MouseEvent, any> | MouseEvent)) => K.Observable<[number, number]>} PosTransform
 */

/**
 * @template T0, R
 * @typedef {(a: MaybeObservable<T0>) => K.Observable<R>} Ary1Lift
 */

/**
 * @template T0, T1, R
 * @typedef {(a: MaybeObservable<T0>, b: MaybeObservable<T1>) => K.Observable<R>} Ary2Lift
 */
