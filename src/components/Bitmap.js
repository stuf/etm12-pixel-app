import * as React from 'karet';
import * as U from 'karet.util';
import * as K from 'kefir';
import * as H from 'kefir.partial.lenses.history';

import * as T from './Bitmap.d';
import styles from './Bitmap.module.scss';

import { takeAll, scaleSize, fstOf, sndOf, getContext } from '../shared';

/**
 *
 * @param {T.Props} props
 */
function Bitmap({ size, scale, data }) {
  const dom = U.variable();
  const ctx = getContext(dom);

  const scaledSize = scaleSize(size, scale);

  const style = {
    width: fstOf(scaledSize),
    height: sndOf(scaledSize),
  };

  const imageData = U.thru(
    K.combine([U.view(H.present, data), size], takeAll),
    U.mapValue(([ps, [w, h]]) => {
      if (!ps || !ps.length) {
        console.warn('ps was undefined or empty', { ps });
        console.trace();
        return;
      }

      if (!ps.length % 4 !== 0) {
        console.warn('ps length was not divisible by 4');
        console.trace();
        return;
      }

      const ys = new Uint8ClampedArray(ps);
      const z = new ImageData(ys, w, h);

      return z;
    }),
    U.flatMapLatest(v => U.combine([ctx, v], takeAll)),
    U.consume(([c, d]) => c.putImageData(d, 0, 0)),
  );

  //

  return (
    <div className={styles.root}>
      <>{U.sink(U.parallel([imageData]))}</>
      <div>
        {size.map(x => x.join(' x '))} x {scale}
      </div>
      <canvas
        {...{
          className: styles.canvas,
          ref: U.refTo(dom),
          style,
          width: fstOf(size),
          height: sndOf(size),
        }}
      />
    </div>
  );
}

export default Bitmap;
