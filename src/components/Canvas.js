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
 * @param {Props} props
 */
function Canvas({ size, scale }) {
  const scaleInverse = scale.map(R.divide(1));

  const dom = U.variable();
  const ctx = H.getContext(dom);
  const scaledSize = H.scaleSize(size, scale);
  const scaledBackSize = H.scaleSize(scaledSize, scaleInverse);
  const ev = E.mouseEventsFor(dom);

  const x = H.layerPos(ev.onDrag);
  x.log('layerpos');

  return (
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
  );
}

export default Canvas;

//

/**
 * @typedef {object} Props
 * @prop {object} size
 * @prop {object} scale
 */
