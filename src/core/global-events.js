/**
 * @module global-events
 * @namespace core
 */
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as K from 'kefir';
import { takeEvents } from 'common/events';

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

// Derived keyboard events

const globalKeydown = Document.keyboard.keydown;

export const altPressed = U.skipUnless(
  R.whereEq({ altKey: true }),
  globalKeydown,
);

export const ctrlPressed = U.skipUnless(
  R.whereEq({ ctrlKey: true }),
  globalKeydown,
);

export const metaPressed = U.skipUnless(
  R.whereEq({ metaKey: true }),
  globalKeydown,
);

export const shiftPressed = U.skipUnless(
  R.whereEq({ shiftKey: true }),
  globalKeydown,
);

//

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
