/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[Value]"}] */
import * as U from 'karet.util';

import { Value } from 'types.d';

/**
 * @template T
 * @param {string} type
 * @param {T.MaybeObservable<HTMLElement, any>} source
 * @return {Value<T>}
 */
export const takeEvents = (type, source) =>
  U.thru(
    source,
    U.flatMapLatest(src => U.fromEvents(src, type, a => a)),
    U.toProperty,
  );
