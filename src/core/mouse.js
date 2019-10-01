/* eslint no-unused-vars: [1, {"varsIgnorePattern": "K"}] */
import * as U from 'karet.util';
import * as K from 'kefir';

/**
 *
 * @param {string} type
 * @param {K.Observable<HTMLElement, any> | HTMLElement} source
 * @return {ObservableMouseEvent}
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
