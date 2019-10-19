// @ts-check
/**
 * @module global-events
 * @namespace core
 */
import { takeEvents } from './_shared';

import { Value } from 'types.d';

export const Window = {
  mouse: {
    mousemove: takeEvents('mousemove', window),
    mousedown: takeEvents('mousedown', window),
    mouseup: takeEvents('mouseup', window),
    mousedrag: takeEvents('mousedown', window),
  },
};

export const Document = {
  keyboard: {
    keydown: takeEvents('keydown', document),
    keyup: takeEvents('keyup', document),
  },
};
