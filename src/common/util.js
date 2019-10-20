import * as R from 'kefir.ramda';

import { LiftedAry1Fn } from 'types.d';

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
