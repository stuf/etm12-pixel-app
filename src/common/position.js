/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[LiftedAry1Fn]"}] */
import * as U from 'karet.util';

import { LiftedAry1Fn } from 'types.d';

/**
 * @type {LiftedAry1Fn<HTMLElement, [number, number]>}
 */
export const elementOffsetFor = U.through(
  U.mapValue(el => el.getBoundingClientRect()),
  U.mapValue(rect => [rect.left, rect.top]),
);
