import * as R from 'ramda';
import * as V from 'partial.lenses.validation';

//

const isTruthy = R.identity;
const isNumber = R.is(Number);
const isBoolean = R.is(Boolean);
const isObject = R.is(Object);
const isArray = R.is(Array);
const isDefined = R.complement(R.isNil);

const Rule = {
  IS_DEFINED: [isDefined, 'is undefined'],
  IS_BOOLEAN: [isBoolean, 'boolean required'],
  IS_NUMBER: [isNumber, 'number required'],
};

//

export const Rules = {};

Rules.HAS_HISTORY = V.props({
  i: Rule.IS_NUMBER,
  c: V.props({
    e: Rule.IS_BOOLEAN,
    m: Rule.IS_NUMBER,
    p: Rule.IS_NUMBER,
  }),
  t: V.props({
    l: Rule.IS_NUMBER,
    r: Rule.IS_DEFINED,
    u: Rule.IS_NUMBER,
  }),
  v: V.props({
    l: Rule.IS_NUMBER,
    r: Rule.IS_DEFINED,
    u: Rule.IS_NUMBER,
  }),
});

//

export const Validate = {
  history: V.errors(Rules.HAS_HISTORY),
};
