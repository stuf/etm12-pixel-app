/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
import * as React from 'karet';
import * as U from 'karet.util';

import * as T from './index.d';
import styles from './index.module.scss';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function Menu({ items }) {
  return (
    <section className={styles.root}>
      <ul className={styles.itemList}>
        {U.thru(
          items,
          U.mapElems((it, i) => (
            <li
              {...{
                key: `menuitem-${i}`,
                className: U.cns(
                  styles.item,
                  U.when(U.view('disabled', it), styles.disabled),
                ),
              }}
            >
              {U.view('label', it)}
            </li>
          )),
        )}
      </ul>
    </section>
  );
}

export default Menu;

//
