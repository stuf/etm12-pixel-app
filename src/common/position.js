/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[LiftedAry1Fn]"}] */
import * as U from 'karet.util';

import { LiftedAry1Fn, LiftedAry2Fn, BBox, Coord } from 'types.d';

/**
 * @type {LiftedAry1Fn<HTMLElement, Coord>}
 */
export const elementOffsetFor = U.through(
  U.mapValue(el => el.getBoundingClientRect()),
  U.mapValue(rect => [rect.left, rect.top]),
);

/**
 * @type {LiftedAry1Fn<HTMLElement, BBox>}
 */
export const elementBoundingBoxFor = U.through(
  U.mapValue(el => el.getBoundingClientRect()),
  U.mapValue(rect => [[rect.left, rect.top], [rect.right, rect.bottom]]),
);

/**
 * @type {LiftedAry2Fn<}
 */
export const insideBoundingBox = U.lift(
  ([[b1x, b1y], [b2x, b2y]], [px, py]) =>
    (px >= b1x) && (py >= b1y) && (px <= b2x) && (py <= b2y),
);
