/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';

import * as T from './index.d';
import styles from './index.module.scss';

import * as M from 'common/meta';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
export default function Dropdown({ items, value }) {
  console.log({ items, value });
  return (
    <div className={styles.root}>
      <select onChange={e => value.set(e.target.value)}>
        {U.thru(
          items,
          U.mapElems((it, i) => (
            <option {...{ key: i, value: i }}>{M.nameIn(it)}</option>
          )),
        )}
      </select>
    </div>
  );
}
