/* eslint no-unused-vars: [1, {"varsIgnorePattern": "(LiftedAry[1-3]Fn|Size|K)"}] */
/**
 * @module events
 * @namespace common
 */
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as K from 'kefir';

/**
 *
 * @param {string} type
 * @param {HTMLElement} source
 * @return {K.Property<Event, any>}
 */
export const takeEvents = (type, source) =>
  U.thru(
    source,
    U.flatMapLatest(src => U.fromEvents(src, type, a => a)),
    U.toProperty,
  );

//

export const pagePos = R.props(['pageX', 'pageY']);
export const screenPos = R.props(['screenX', 'screenY']);
export const layerPos = R.props(['layerX', 'layerY']);
