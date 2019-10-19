import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import styles from './Drawable.module.scss';

import { takeEvents } from 'core/_shared';
import { elementOffsetFor } from 'common/position';

export default function Drawable({ offset, bbox, bus }) {
  /** @type {import('..').ObsElement} */
  const dom = U.variable();
  const domOffset = elementOffsetFor(dom);
  domOffset.log('drawable offset');

  dom.map(x => x.getBoundingClientRect()).log();

  const mouseDown = takeEvents('mousedown', dom);
  const mouseDrag = takeEvents('mousedown', dom).flatMapLatest(() =>
    takeEvents('mousemove', dom).takeUntilBy(
      takeEvents('mouseup', dom).take(1),
    ),
  );

  U.parallel([mouseDown, mouseDrag])
    .map(R.props(['screenX', 'screenY', 'pageX', 'pageY']))
    .log('drag');

  return (
    <div className={styles.root} ref={U.refTo(dom)}>
      {U.stringify(offset)}
    </div>
  );
}
