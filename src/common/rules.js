import * as V from 'kefir.partial.lenses.validation';

import {
  isBool,
  isDefined,
  isNumber,
  isString,
  isArray,
} from 'common/validators';

export const required = [isDefined, 'required'];
export const number = [isNumber, 'not a number'];
export const string = [isString, 'not a string'];
export const array = [isArray, 'not an array'];
export const bool = [isBool, 'not a boolean'];

// History

export const undoHistory = V.props({
  i: number,
  c: V.props({
    e: bool,
    m: number,
    p: number,
  }),
  t: V.props({
    l: number,
    r: required,
    u: number,
  }),
  v: V.props({
    l: number,
    r: required,
    u: number,
  }),
});
