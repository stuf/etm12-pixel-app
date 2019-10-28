import * as R from 'ramda';

export const isDefined = R.complement(R.isNil);
export const isNumber = R.is(Number);
export const isString = R.is(String);
export const isArray = R.is(Array);
