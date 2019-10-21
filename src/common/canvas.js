/* eslint no-unused-vars: [1, {"varsIgnorePattern": "(LiftedAry[1-3]Fn|Size)"}] */
import * as U from 'karet.util';
import * as K from 'kefir';
import { takeEvents } from 'common/events';

import { LiftedAry1Fn, LiftedAry2Fn, Size } from 'types.d';

const COLOR_CHANNELS = 4;

/**
 * @type {LiftedAry2Fn<Size, number, Size>}
 */
export const scaleSize = U.lift(([w, h], m) => [w * m, h * m]);

/**
 * @type {LiftedAry1Fn<HTMLCanvasElement, CanvasRenderingContext2D>}
 */
export const getContext = U.lift(el => el.getContext('2d'));

//

/**
 * @param {HTMLElement} domRef
 */
export const drawingEvents = domRef => {
  const drag = takeEvents('mousedown', domRef)
    .flatMapLatest(() =>
      takeEvents('mousemove', domRef).takeUntilBy(
        K.merge([
          takeEvents('mouseup', domRef),
          takeEvents('mouseout', domRef),
        ]).take(1),
      ),
    )
    .toProperty();

  const click = takeEvents('mousedown', domRef);

  return K.merge([drag, click]).toProperty();
};

//

/**
 * @type {LiftedAry2Fn<[number, number], number, number]>}
 */
export const getIx = U.lift(
  ([x, y], w) => (Math.trunc(y) * w + Math.trunc(x)) * COLOR_CHANNELS,
);

/**
 * @type {LiftedAry2Fn<[number, number], number, number]>}
 */
export const getIxRange = U.lift(([x, y], w) => {
  const ix = getIx([x, y], w);
  return [ix, ix + COLOR_CHANNELS];
});

export const rgbFromHex = U.lift(x => {
  const n = parseInt(x, 16);
  return [(n & 0xff0000) >> 16, (n & 0xff00) >> 8, n & 0xff, 255];
});

/**
 * Convert a hexadecimal color into an `[r, g, b, a]` tuple.
 * @type {LiftedAry1Fn<string, number[]>}
 */
export const fromHexColor = U.lift(x => {
  const n = parseInt(x, 16);
  if (x.length > 6) {
    return [
      (n & 0xff000000) >> 24,
      (n & 0xff0000) >> 16,
      (n & 0xff00) >> 8,
      n & 0xff,
    ];
  }

  return [(n & 0xff0000) >> 16, (n & 0xff00) >> 8, n & 0xff, 255];
});

/**
 * @type {LiftedAry1Fn<[number, number], number[]>}
 */
export const empty = U.lift(([w, h]) => Array(w * h * COLOR_CHANNELS).fill(0));
