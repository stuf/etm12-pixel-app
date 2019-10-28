import * as V from 'kefir.partial.lenses.validation';

import { isDefined, isNumber, isString, isArray } from 'common/validators';

export const required = [isDefined, 'required'];
export const number = [isNumber, 'not a number'];
export const string = [isString, 'not a string'];
export const array = [isArray, 'not an array'];
