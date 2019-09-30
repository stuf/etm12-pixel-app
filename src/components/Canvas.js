/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K]"}] */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'ramda';
import * as K from 'kefir';

import * as H from '../shared';
import * as E from '../core/mouse';
import styles from './Canvas.module.scss';

/**
 *
 * @param {[[number, number], CanvasRenderingContext2D]} param0
 */
const drawEff = ([[dx, dy], ctx]) => {
  const p = new Uint8ClampedArray([0, 0, 0, 255]);
  const data = new ImageData(p, 1, 1);
  ctx.putImageData(data, ~~dx, ~~dy);
};

/**
 *
 * @param {Props} props
 */
function Canvas({ size, scale }) {
  const scaleInverse = scale.map(R.divide(1));

  const dom = U.variable();
  const ctx = H.getContext(dom);
  const scaledSize = H.scaleSize(size, scale);
  const ev = E.mouseEventsFor(dom);

  const dragXY = H.layerPos(K.merge([ev.onDrag, ev.onButtonDown])).toProperty();
  const scaledXY = H.scaleSize(dragXY, scaleInverse).toProperty();

  const draw = U.thru(
    U.combine([scaledXY, ctx], H.takeAll),
    U.consume(drawEff),
  );

  return (
    <div>
      <>{U.sink(U.parallel([draw]))}</>
      <canvas
        ref={U.refTo(dom)}
        className={styles.root}
        width={U.view(0, size)}
        height={U.view(1, size)}
        style={{
          width: U.view(0, scaledSize),
          height: U.view(1, scaledSize),
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
 */
