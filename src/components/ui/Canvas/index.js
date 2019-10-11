/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as L from 'kefir.partial.lenses';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as K from 'kefir';

import * as M from '../../../meta';
import * as E from '../../../core/mouse';
import * as H from '../../../shared';
import { COLOR_CHANNELS } from '../../../constants';
import { saveImageFromCanvas } from '../../../core/effects';

import PixelGrid from './_/PixelGrid';

import * as T from './index.d';
import styles from './index.module.scss';

const resizeImageData = state => ([[w, h], n]) => {
  const xs = Array(w * h * n).fill(0);
  console.group('resizeImageData');
  console.warn(
    'This function is currently a no-op, due to incomplete values being set into canvas image data state.',
  );
  console.warn(
    'TODO: verify `Array(w * h * n)` results in a valid value for `ImageData`.',
  );
  console.warn('What would be set into `canvasData`:', xs);
  console.groupEnd();
  state.set(xs);
};

/**
 * @param {T.Props} props
 */
function Canvas({ size, scale, color, canvasData }) {
  const actions = U.serializer();

  const scaleInverse = scale.map(R.divide(1));

  const dom = U.variable();
  const ctx = H.getContext(dom);
  const scaledSize = H.scaleSize(size, scale);
  const ev = E.mouseEventsFor(dom);

  const movementXY = H.scaleSize(H.layerPos(ev.onMove), scaleInverse)
    .map(R.map(Math.trunc))
    .skipDuplicates(R.equals);

  const width = H.fstOf(size);
  const height = H.sndOf(size);

  const ix = H.getIx(movementXY, width).skipDuplicates(R.equals);

  const style = {
    width: H.fstOf(scaledSize),
    height: H.sndOf(scaledSize),
  };

  const currentColor = M.selectedColorIn(color);

  const colorHex = H.fromHex(currentColor);

  const updateDataOnDraw = U.thru(
    K.combine([movementXY.sampledBy(ev.onDrag)], [colorHex, width], H.takeAll),
    U.toProperty,
    U.consume(([[x, y], rgba, w]) => {
      const [start, end] = H.getIx([x, y], w);

      const takePerf = () => performance.now();

      const t1 = canvasData.take(1).map(takePerf);

      const t2 = canvasData
        .skip(1)
        .take(1)
        .map(takePerf);

      const tdiff = K.combine([t1, t2], (a, b) => b - a).toProperty();

      tdiff.observe({
        value: v => console.log(`updating canvasData took ${v.toFixed(3)} ms`),
      });

      canvasData.view(L.slice(start, end)).set(rgba);
    }),
  );

  const updateCanvas = U.thru(
    K.combine([canvasData], [ctx, width, height]),
    U.toProperty,
    U.consume(
      /**
       * @param {[number[], CanvasRenderingContext2D, number, number]} poopoo
       */
      ([data, context, w, h]) => {
        const xs = new Uint8ClampedArray(data);
        const imageData = new ImageData(xs, w, h);
        context.putImageData(imageData, 0, 0);
      },
    ),
  );

  //

  const resize = U.thru(
    U.combine([size, COLOR_CHANNELS], H.takeAll),
    U.toProperty,
    R.tap(H.logObsType('resize')),
    U.consume(resizeImageData(canvasData)),
  ).spy('resize');

  const effSink = U.sink(
    U.parallel([resize, updateDataOnDraw, updateCanvas, actions]),
  );

  //

  return (
    <div {...{ className: U.cns(styles.root, 'flow') }}>
      <>{effSink}</>

      <div className="relative-pos">
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

      <fieldset>
        <legend>File</legend>

        <button
          onClick={U.actions(
            e => e.persist(),
            () => saveImageFromCanvas(dom.get()),
          )}
        >
          Save image
        </button>
      </fieldset>

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
