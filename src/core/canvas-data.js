/**
 * @module canvas-data
 * @namespace core
 */
import * as H from 'kefir.partial.lenses.history';
import * as U from 'karet.util';

import * as S from '../settings';

import { empty } from 'common/canvas';

//

/**
 * @type {number[]}
 */
const initValue = empty(S.canvas.initialSize);

const state = U.atom(
  H.init(
    {
      maxCount: S.history.maxCount,
      pushEquals: S.history.pushEquals,
      replacePeriod: S.history.replacePeriod,
    },
    initValue,
  ),
);

export default state;
