/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K]"}] */
import * as U from 'karet.util';
import * as R from 'ramda';
import * as I from 'infestines';
import * as K from 'kefir';
import yiq from 'yiq';
import { COLOR_CHANNELS } from './constants';

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

/**
 * @param {number[]} xs
 * @return {number}
 */
export const mean = xs => {
  const sum = R.reduce(R.add, 0, xs);
  return sum / xs.length;
};

/**
 *
 * @param {number[]} xs
 * @return {number[]}
 */
export const difference = xs => {
  const avg = mean(xs);
  const diffs = R.map(x => x - avg, xs);
  return diffs;
};

/**
 *
 * @param {number[]} xs
 * @return {number[]}
 */
export const squaredDifference = xs => {
  const avg = mean(xs);
  return R.map(x => Math.pow(x - avg, 2), xs);
};

/**
 * @param {number[]} xs
 * @return {number}
 */
export const meanSquaredDifference = xs => mean(squaredDifference(xs));

/**
 *
 * @param {number[]} xs
 * @return {number}
 */
export const stdDev = xs => Math.sqrt(meanSquaredDifference(xs));

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

/**
 * @type {(pos: [number, number], w: number) => number}
 */
export const computeIx = U.lift(([x, y], w) => {
  return (~~y * w + ~~x) * COLOR_CHANNELS;
});

/**
 * @type {(pos: [number, number], w: number) => [number, number]}
 */
export const getIx = U.lift(([x, y], w) => {
  const ix = computeIx([x, y], w);
  return [ix, ix + COLOR_CHANNELS];
});

// COLORS

/**
 * Convert a hexadecimal color into an `[r, g, b, a]` tuple.
 * @type {Ary1Lift<string, RGBA>}
 */
export const fromHex = U.lift(x => {
  const n = parseInt(x, 16);
  return [(n & 0xff0000) >> 16, (n & 0xff00) >> 8, n & 0xff, 255];
});

export const toHex = U.lift(x => {
  const y = x.slice(0, 3);

  console.log({ y });
  return y.join('-');
});

// CANVAS

/**
 * @type {Ary1Lift<HTMLCanvasElement, CanvasRenderingContext2D>}
 */
export const getContext = U.lift(el => el.getContext('2d'));

/**
 * @type {Ary2Lift<[number, number], CanvasRenderingContext2D, ImageData>}
 */
export const getImageData = U.lift(([w, h], ctx) =>
  ctx.getImageData(0, 0, w, h),
);

// ARRAYS

/**
 * @template T, U
 * @type {(v: K.Observable<T, any>) => K.Observable<T[0], any>} */
export const fstOf = U.view(0);
export const sndOf = U.view(1);

export const rangeScaled = (start, end, step) =>
  U.combine([start, end, step], (a, b, s) =>
    Array(b - a)
      .fill(0)
      .map((_, i) => i * s + a),
  );

const yiq_ = (opts = {}) => c => yiq(c, opts);

export const yiqFor = c => U.thru(c, U.mapValue(yiq_()));

// DEBUG

export const logObsType = name => obs => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  console.group(name);
  console.log('instanceof Stream =>', obs instanceof K.Stream);
  console.log('instanceof Property =>', obs instanceof K.Property);
  console.log('instanceof Observable =>', obs instanceof K.Observable);

  if (obs instanceof K.Property) {
    console.log('Property =>', obs);
  }
  console.groupEnd();
};

//

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
