/**
 * @module data
 * @namespace common
 */
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import { LiftedAry1Fn, LiftedAry3Fn } from 'types.d';

// Data structures

/**
 * @type {LiftedAry1Fn<number[], Uint8ClampedArray>}
 */
export const mkClampedArray = R.constructN(1, Uint8ClampedArray);

/**
 * @type {LiftedAry3Fn<Uint8ClampedArray, number, number, ImageData>}
 */
export const mkImageData = R.constructN(3, ImageData);

// Utility functions

/**
 * @type {LiftedAry3Fn<number, number, number, number[]>}
 */
export const rangeScaled = U.lift((start, end, step) =>
  U.combine([start, end, step], (a, b, s) =>
    Array(((b - a) / s + 1))
      .fill(a)
      .map((_, i) => a + i * s),
  ),
);
