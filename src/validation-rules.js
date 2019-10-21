import * as R from 'ramda';
import * as V from 'partial.lenses.validation';

const isNonEmpty = R.identity;
const isArrayLike = R.isArrayLike;
const isNumber = R.is(Number);
const isBool = R.is(Boolean);
const isObject = R.is(Object);
const isDefined = R.isNil;

export const Rule = {
  DEFINED: [isDefined, 'required'],
  REQUIRED: [isNonEmpty, 'required'],
  NUMBER: [isNumber, 'non-number'],
  BOOLEAN: [isBool, 'non-boolean'],
  IS_OBJECT: [isObject, 'non-object'],
  IS_ARRAY_LIKE: [isArrayLike, 'non-array-like'],
};

export const getErrors = V.errors;

export const nullable = V.optional;
export const and = V.and;
export const props = V.props;
export const tuple = V.tuple;
