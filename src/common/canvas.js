import * as U from 'karet.util';

import { LiftedAry2Fn, Size } from 'types.d';

/**
 * @type {LiftedAry2Fn<Size, number, Size>}
 */
export const scaleSize = U.lift(([w, h], m) => [w * m, h * m]);
