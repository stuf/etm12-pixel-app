/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module Canvas
 * @namespace components.ui
 */
import * as React from 'karet';
import * as L from 'kefir.partial.lenses';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as K from 'kefir';

import * as E from 'core/mouse';
import * as H from 'shared';
import * as S from 'settings';
import { saveImageFromCanvas } from 'core/effects';

import Bitmap from 'components/ui/Bitmap';

import * as T from './index.d';
import styles from './index.module.scss';
import { mouseEventsFor } from 'core/mouse';

const resizeImageData = state => ([[w, h], n]) => {
  const xs = Array(w * h * n).fill(0);

  // if (process.env.NODE_ENV === 'development') {
  //   console.group('resizeImageData');
  //   console.warn(
  //     'This function is currently a no-op, due to incomplete values being set into canvas image data state.',
  //   );
  //   console.warn(
  //     'TODO: verify `Array(w * h * n)` results in a valid value for `ImageData`.',
  //   );
  //   console.warn('What would be set into `canvasData`:', xs);
  //   console.groupEnd();
  // }
  state.set(xs);
};

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function Canvas({
  size,
  scale,
  color,
  drawable,
  canvasData,
  dom = U.variable(),
}) {
  const eventRoot = U.variable();
  const rootEvent = mouseEventsFor(eventRoot);

  const actions = U.serializer();

  const scaleInverse = U.mapValue(R.divide(1), scale);

  const ctx = H.getContext(dom);
  const scaledSize = H.scaleSize(size, scale);
  const ev = E.mouseEventsFor(dom);

  const movementXY = H.scaleSize(H.layerPos(ev.onMove), scaleInverse).map(
    R.map(Math.trunc),
  );

  const width = H.fstOf(size);
  const height = H.sndOf(size);

  const ix = H.getIx(movementXY, width).skipDuplicates(R.equals);

  const style = {
    width: H.fstOf(scaledSize),
    height: H.sndOf(scaledSize),
  };

  const currentColor = U.view(
    L.choose(x => [
      'palettes',
      x.currentPalette,
      'items',
      x.currentColor,
      L.dropPrefix('#'),
    ]),
    color,
  );

  const colorHex = H.fromHex(currentColor);

  //

  const updateDataOnDraw = U.thru(
    K.combine(
      [movementXY.sampledBy(U.parallel([ev.onButtonDown, ev.onDrag]))],
      [colorHex, width],
      H.takeAll,
    ),
    U.toProperty,
    U.consume(([[x, y], rgba, w]) => {
      const [start, end] = H.getIx([x, y], w);

      const takePerf = () => performance.now();

      const t1 = canvasData.take(1).map(takePerf);

      const t2 = canvasData
        .skip(1)
        .take(1)
        .map(takePerf);

      // eslint-disable-next-line
      const tdiff = K.combine([t1, t2], (a, b) => b - a).toProperty();

      // tdiff.observe({
      //   value: v => console.log(`updating canvasData took ${v.toFixed(3)} ms`),
      // });

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
    U.combine([size, S.canvas.colorChannels], H.takeAll),
    U.toProperty,
    U.consume(resizeImageData(canvasData)),
  );

  const effSink = U.sink(
    U.parallel([resize, updateDataOnDraw, updateCanvas, actions]),
  );

  //

  return (
    <div
      {...{ className: U.cns(styles.root, 'flow'), ref: U.refTo(eventRoot) }}
    >
      <>{effSink}</>

      <div className="relative-pos" style={{ height: '100%' }}>
        {/* <Cursor {...{ pos: movementXY, scale }} />
        <PixelGrid {...{ size, scale }} /> */}

        <div className={styles.center}>
          <Bitmap {...{ size, scale, data: canvasData }} />
        </div>
      </div>

      {/** @todo Extract saving of image out from the canvas itself */}
      {/* <fieldset>
        <legend>File</legend>

        <button
          onClick={U.actions(
            e => e.persist(),
            () => saveImageFromCanvas(dom.get()),
          )}
        >
          Save image
        </button>
      </fieldset> */}

      {/* <fieldset className="debug">
        <legend>Debug</legend>

        <dl>
          <dt>
            index range for mouse (<code>ix</code>)
          </dt>
          <dd>{U.stringify(ix)}</dd>
        </dl>
      </fieldset> */}
    </div>
  );
}

export default Canvas;
