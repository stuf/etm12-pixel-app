import * as U from 'karet.util';

/**
 * @template T
 * @param {string} type
 * @param {T.MaybeObservable<HTMLElement, any>} source
 * @return {K.Property<T, any>}
 */
export const takeEvents = (type, source) =>
  U.thru(
    source,
    U.flatMapLatest(src => U.fromEvents(src, type, a => a)),
    U.toProperty,
  );
