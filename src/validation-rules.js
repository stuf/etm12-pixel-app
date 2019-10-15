import * as R from 'ramda';
import * as V from 'partial.lenses.validation';

const isNonEmpty = R.identity;
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
};

export const getErrors = V.errors;

export const nullable = V.optional;
export const and = V.and;
export const props = V.props;
