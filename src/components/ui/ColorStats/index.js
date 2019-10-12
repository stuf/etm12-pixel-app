/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
// import * as U from 'karet.util';
// import * as R from 'kefir.ramda';
// import * as L from 'kefir.partial.lenses';

// import * as S from '../../../shared';

import * as T from './index.d';
import styles from './index.module.scss';

/**
 * @param {T.Props} props
 */
function ColorStats({ data }) {
  data.log();

  return <div className={styles.root}>stats</div>;
}

export default ColorStats;
