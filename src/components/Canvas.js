/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K]"}] */
import * as React from 'karet';
import * as L from 'partial.lenses';
import * as U from 'karet.util';
import * as R from 'ramda';
import * as K from 'kefir';

import * as M from '../meta';
import * as E from '../core/mouse';
import * as H from '../shared';

import * as T from './Canvas.d';

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
 * @param {T.Props} props
 */
function Canvas({ size, scale, color, canvasData }) {
  const scaleInverse = scale.map(R.divide(1));

  const dom = U.variable();
  const ctx = H.getContext(dom);
  const scaledSize = H.scaleSize(size, scale);
  const ev = E.mouseEventsFor(dom);

  const dragXY = H.layerPos(K.merge([ev.onDrag, ev.onButtonDown])).toProperty();
  const scaledXY = H.scaleSize(dragXY, scaleInverse).toProperty();

  const movementXY = H.scaleSize(H.layerPos(ev.onMove), scaleInverse)
    .map(R.map(Math.trunc))
    .skipDuplicates(R.equals);

  const width = H.fstOf(size);
  const height = H.sndOf(size);

  const ix = H.getIx(movementXY, width);

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

  const effSink = U.sink(U.parallel([draw]));

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

      <fieldset className="debug">
        <legend>Debug</legend>

        <dl>
          <dt>
            index range for mouse (<code>ix</code>)
          </dt>
          <dd>{U.stringify(ix)}</dd>
        </dl>
      </fieldset>
    </div>
  );
}

export default Canvas;
