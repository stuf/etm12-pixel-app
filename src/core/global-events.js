// @ts-check
/**
 * @module global-events
 * @namespace core
 */
import * as U from 'karet.util';
import * as K from 'kefir';
import { takeEvents } from './_shared';

import { Value } from 'types.d';

/**
 * @type {WindowEvents}
 */
export const Window = {
  mouse: {
    mousemove: takeEvents('mousemove', window),
    mousedown: takeEvents('mousedown', window),
    mouseup: takeEvents('mouseup', window),
    mousedrag: takeEvents('mousedown', window).flatMapLatest(() =>
      takeEvents('mousemove', window).takeUntilBy(
        takeEvents('mouseup', window),
      ),
    ),
  },
};

export const Document = {
  keyboard: {
    keydown: takeEvents('keydown', document),
    keyup: takeEvents('keyup', document),
  },
};

// Derived

export const Derived = {
  Window: {
    mouse: {
      mouseDownAndDrag: K.merge([
        Window.mouse.mousedown,
        Window.mouse.mousemove,
      ]).toProperty(),
    },
  },
};

/**
 * @typedef {K.Property<MouseEvent, any>} MouseEventValue
 */

/**
 * @typedef {object} MouseEvents
 * @prop {MouseEventValue} mousemove
 * @prop {MouseEventValue} mousedown
 * @prop {MouseEventValue} mouseup
 * @prop {MouseEventValue} mousedrag
 */

/**
 * @typedef {object} WindowEvents
 * @prop {MouseEvents} mouse
 */
