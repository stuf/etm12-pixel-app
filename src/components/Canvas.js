/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K]"}] */
import * as React from 'karet';
import * as L from 'partial.lenses';
import * as U from 'karet.util';
import * as R from 'ramda';
import * as K from 'kefir';

import * as M from '../meta';
import * as E from '../core/mouse';
import * as H from '../shared';

import PixelGrid from './_/PixelGrid';

import styles from './Canvas.module.scss';

/**
 *
 * @param {[[number, number], CanvasRenderingContext2D]} param0
 */
const drawEff = ([[dx, dy], ctx, color]) => {
  const rgb = H.fromHex(color);
  const p = new Uint8ClampedArray(rgb);
  const data = new ImageData(p, 1, 1);
  ctx.putImageData(data, ~~dx, ~~dy);
};

/**
 *
 * @param {Props} props
 */
function Canvas({ size, scale, color }) {
  const scaleInverse = scale.map(R.divide(1));

  const actions = U.serializer(null);

  actions.log();

  const dom = U.variable();
  const ctx = H.getContext(dom);
  const scaledSize = H.scaleSize(size, scale);
  const ev = E.mouseEventsFor(dom);

  const dragXY = H.layerPos(K.merge([ev.onDrag, ev.onButtonDown])).toProperty();
  const scaledXY = H.scaleSize(dragXY, scaleInverse).toProperty();

  const width = H.fstOf(size);
  const height = H.sndOf(size);

  const style = {
    width: H.fstOf(scaledSize),
    height: H.sndOf(scaledSize),
  };

  const currentColor = M.selectedColorIn(color);

  //

  const draw = U.thru(
    K.combine([scaledXY, ctx], [currentColor], H.takeAll),
    U.toProperty,
    R.tap(H.logObsType('draw')),
    U.consume(drawEff),
  );

  const effSink = U.sink(U.parallel([draw, actions]));

  //

  return (
    <div {...{ className: styles.root }}>
      <>{effSink}</>

      <PixelGrid {...{ size, scale }} />
      <canvas
        {...{
          width,
          height,
          style,
          className: styles.canvas,
          ref: U.refTo(dom),
        }}
      />
    </div>
  );
}

export default Canvas;

//

/**
 * @typedef {object} Props
 * @prop {object} size
 * @prop {object} scale
 * @prop {IStateColor} color
 */

/**
 * @typedef {object} IStateColor
 * @prop {number} currentColor
 * @prop {number} currentPalette
 * @prop {IPalette[]} palettes
 */

/**
 * @typedef {object} IPalette
 * @prop {string} name
 * @prop {string[]} items
 */
