import * as U from 'karet.util';

import { LiftedAry1Fn, LiftedAry2Fn, Size } from 'types.d';

/**
 * @type {LiftedAry2Fn<Size, number, Size>}
 */
export const scaleSize = U.lift(([w, h], m) => [w * m, h * m]);

/**
 * @type {LiftedAry1Fn<HTMLCanvasElement, CanvasRenderingContext2D>}
 */
export const getContext = U.lift(el => el.getContext('2d'));
