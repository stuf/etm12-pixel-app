import * as U from 'karet.util';
import * as K from 'kefir';

import { LiftedAry1Fn } from 'types.d';

/**
 * @type {LiftedAry1Fn<HTMLElement, [number, number]>}
 */
export const elementOffsetFor = U.through(
  U.mapValue(el => el.getBoundingClientRect()),
  U.mapValue(rect => [rect.left, rect.top]),
);
