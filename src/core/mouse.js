/**
 * @module mouse
 * @namespace core
 */
/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as U from 'karet.util';
import * as K from 'kefir';
import * as T from './mouse.d';

/**
 *
 * @param {string} type
 * @param {T.MaybeObservable<HTMLElement, any>} source
 * @return {K.Property<MouseEvent, any>}
 */
const takeEvents = (type, source) =>
  U.thru(
    source,
    U.flatMapLatest(src => U.fromEvents(src, type, a => a)),
    U.toProperty,
  );

/**
 *
 * @param {MaybeObservable<HTMLElement>} source
 * @return {IMouseEvents}
 */
export const mouseEventsFor = source => ({
  onButtonDown: takeEvents('mousedown', source),
  onButtonUp: takeEvents('mouseup', source),
  onMouseOver: takeEvents('mouseover', source),
  onMouseOut: takeEvents('mouseout', source),
  onMove: takeEvents('mousemove', source),
  onDrag: takeEvents('mousedown', source).flatMapLatest(() =>
    takeEvents('mousemove', source).takeUntilBy(
      K.merge([
        takeEvents('mouseup', source),
        takeEvents('mouseout', source),
      ]).take(1),
    ),
  ),
});

//

/**
 * @template T
 * @typedef {K.Observable<T, any> | T} MaybeObservable
 */

/**
 * @typedef {object} IMouseEvents
 * @prop {ObservableMouseEvent} onButtonDown
 * @prop {ObservableMouseEvent} onButtonUp
 * @prop {ObservableMouseEvent} onMouseOver
 * @prop {ObservableMouseEvent} onMouseOut
 * @prop {ObservableMouseEvent} onMove
 * @prop {ObservableMouseEvent} onDrag
 */

/**
 * @typedef {K.Property<MouseEvent, any>} ObservableMouseEvent
 */
