/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module Cursor
 * @namespace components.ui.Canvas._
 */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import * as T from './index.d';

import { fstOf, sndOf } from '../../../../../shared';

/**
 * @param {T.Props} props
 */
function Cursor({ pos, scale }) {
  const scaledPos = U.combine([pos, scale], ([x, y], m) => [
    Math.trunc(x * m),
    Math.trunc(y * m),
  ]).skipDuplicates(R.equals);

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: scale,
        height: scale,
        transform: U.string`translateX(${fstOf(
          scaledPos,
        )}px) translateY(${sndOf(scaledPos)}px)`,
        border: 'solid 1px #f00',
        pointerEvents: 'none',
      }}
    />
  );
}

export default Cursor;
