/* eslint no-unused-vars: [1, {"varsIgnorePattern": "(LiftedAry[1-3]Fn|Size)"}] */
import * as R from 'kefir.ramda';

import { LiftedAry1Fn } from 'types.d';

export const toBase = b => n => parseInt(n, b);

export const asDec = toBase(10);
export const asHex = toBase(16);

export const surroundWith = R.curry((l, r, v) => R.join('', [l, v, r]));

export const parenthesize = v => surroundWith('(', ')', v);

/**
 *
 * @param {(string|number)} b
 * @param {(string|number)} a
 * @return {string}
 */
export const withSuffix = (b, a) => String.prototype.concat(a, b);

export const toUnit = unit => withSuffix.bind(null, unit);

export const asPercent = toUnit('%');
export const asRem = toUnit('rem');
export const asPx = toUnit('px');
export const asVw = toUnit('vw');
export const asVh = toUnit('vh');

//

/**
 * @type {LiftedAry1Fn<number, number>}
 */
export const reciprocal = R.divide(1);
