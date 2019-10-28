/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K]"}] */
import * as U from 'karet.util';
import * as R from 'ramda';
import * as I from 'infestines';
import * as K from 'kefir';
import * as S from './settings';

const COLOR_CHANNELS = S.canvas.colorChannels;

// FUNCTIONS

/** @deprecated */
export const takeAll = R.unapply(R.identity);

// OBSERVABLES

/** @deprecated */
export const isProperty = x => x instanceof K.Property;
/** @deprecated */
export const isObservable = x => x instanceof K.Observable;

/**
 * @deprecated
 * @template T
 * @param {T | K.Observable<T, any>} x
 * @return {K.Property<T, any>}
 */
export const toProperty = x => {
  if (isProperty(x)) {
    return x;
  } else if (isObservable(x)) {
    return x.toProperty();
  } else {
    return K.constant(x);
  }
};

// CONSTANTS

/** @deprecated */
const Pos = {
  PAGE: ['pageX', 'pageY'],
  OFFSET: ['offsetX', 'offsetY'],
  SCREEN: ['screenX', 'screenY'],
  LAYER: ['layerX', 'layerY'],
};

// ARITHMETIC

/**
 * @deprecated
 * @param {number} n
 * @return {number}
 */
export const reciprocal = n => Math.pow(n, -1);

/**
 * @deprecated
 * @type {Ary1Lift<number, number>}
 */
export const reciprocalU = U.lift(reciprocal);

/**
 * @deprecated
 * @type {(size: MaybeObservable<[number, number]>, scale: MaybeObservable<number>) => K.Observable<[number, number]>}
 */
export const scaleSize = U.lift(([w, h], m) => [w * m, h * m]);

/**
 * @deprecated
 * @param {number[]} xs
 * @return {number}
 */
export const mean = xs => {
  const sum = R.reduce(R.add, 0, xs);
  return sum / xs.length;
};

/**
 * @deprecated
 * @param {number[]} xs
 * @return {number[]}
 */
export const difference = xs => {
  const avg = mean(xs);
  const diffs = R.map(x => x - avg, xs);
  return diffs;
};

/**
 * @deprecated
 * @param {number[]} xs
 * @return {number[]}
 */
export const squaredDifference = xs => {
  const avg = mean(xs);
  return R.map(x => Math.pow(x - avg, 2), xs);
};

/**
 * @deprecated
 * @param {number[]} xs
 * @return {number}
 */
export const meanSquaredDifference = xs => mean(squaredDifference(xs));

/**
 * @deprecated
 * @param {number[]} xs
 * @return {number}
 */
export const stdDev = xs => Math.sqrt(meanSquaredDifference(xs));

// COORDINATES

/**
 * @deprecated
 * @type {PosTransform}
 */
export const layerPos = U.mapValue(R.props(Pos.LAYER));

/**
 * @deprecated
 * @type {PosTransform}
 */
export const screenPos = U.mapValue(R.props(Pos.SCREEN));

/**
 * @deprecated
 * @type {PosTransform}
 */
export const pagePos = U.mapValue(R.props(Pos.PAGE));

/**
 * @deprecated
 * @type {(pos: [number, number], w: number) => number}
 */
export const computeIx = U.lift(([x, y], w) => {
  return (~~y * w + ~~x) * COLOR_CHANNELS;
});

/**
 * @deprecated
 * @type {(pos: [number, number], w: number) => [number, number]}
 */
export const getIx = U.lift(([x, y], w) => {
  const ix = computeIx([x, y], w);
  return [ix, ix + COLOR_CHANNELS];
});

// COLORS

/**
 * Convert a hexadecimal color into an `[r, g, b, a]` tuple.
 *
 * @deprecated
 * @type {Ary1Lift<string, RGBA>}
 */
export const fromHex = U.lift(x => {
  const n = parseInt(x, 16);
  if (x.length > 6) {
    return [
      (n & 0xff000000) >> 24,
      (n & 0xff0000) >> 16,
      (n & 0xff00) >> 8,
      n & 0xff,
    ];
  }

  return [(n & 0xff0000) >> 16, (n & 0xff00) >> 8, n & 0xff, 255];
});

/**
 * @typedef {[number, number, number]} RGB
 */

/**
 * @typedef {[number, number, number, number]} RGBA
 */

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
