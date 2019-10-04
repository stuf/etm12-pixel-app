import * as React from 'karet';
import * as U from 'karet.util';
import * as T from './Menu';

import styles from './Menu.module.scss';

/**
 * @param {T.Props} props
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
                className: styles.item,
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
