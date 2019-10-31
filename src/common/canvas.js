/* eslint no-unused-vars: [1, {"varsIgnorePattern": "(LiftedAry[1-3]Fn|Size)"}] */
import * as U from 'karet.util';
import * as K from 'kefir';
import { saveAs } from 'file-saver';
import Long from 'long';

import { takeEvents } from 'common/events';
import { mkElem } from 'common/dom';
import { mkClampedArray, mkImageData } from 'common/data';

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

/**
 * @type {LiftedAry2Fn<CanvasRenderingContext2D, Size, ImageData>}
 */
export const getImageData = U.lift((ctx, [w, h]) =>
  ctx.getImageData(0, 0, w, h),
);

/**
 * @type {LiftedAry3Fn<CanvasRenderingContext2D, number, number, ImageData>}
 */
export const getImageData_ = U.lift((ctx, w, h) =>
  ctx.getImageData(0, 0, w, h),
);

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

// Colors

const _hexFromString = str => Long.fromString(str, null, 16);

/**
 * Convert a string representing a hexadecimal color, optionally
 * including an alpha value, into a 4-tuple (RGBA).
 */
export const convertFromHexColor = U.lift(str => {
  if (str.length === 6) {
    const val = parseInt(str, 16);
    return [(val & 0xff0000) >> 16, (val & 0xff00) >> 8, val & 0xff, 255];
  }

  const val = Long.fromString(str, null, 16);
  const rmask = _hexFromString('ff000000');
  const gmask = _hexFromString('ff0000');
  const bmask = _hexFromString('ff00');
  const amask = _hexFromString('ff');

  return [
    +val.and(rmask).shr(24),
    +val.and(bmask).shr(16),
    +val.and(gmask).shr(8),
    +val.and(amask),
  ];
});

/**
 * @type {LiftedAry1Fn<[number, number], number[]>}
 */
export const empty = U.lift(([w, h]) => Array(w * h * COLOR_CHANNELS).fill(0));

//

/**
 *
 * @param {number[]} image
 * @param {[number, number]} size
 * @param {string} filename
 */
export const saveImage = U.lift((data, size, filename) => {
  const [width, height] = size;

  const el = mkElem('canvas', { width, height });

  const ctx = getContext(el);

  const clampedData = mkClampedArray(data);
  const imageData = mkImageData(clampedData, width, height);

  ctx.putImageData(imageData, 0, 0);
  el.toBlob(b => saveAs(b, filename));
});
