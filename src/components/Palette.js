/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'ramda';

import * as H from '../shared';

import * as T from './Palette.d';
import style from './Palette.module.scss';

/**
 *
 * @param {T.Props} props
 */
function Palette({ name, items, currentColor }) {
  return (
    <section className={style.root}>
      <header>{name}</header>
      <ul className={style.items}>
        {U.thru(
          items,
          U.mapElems((it, i) => {
            const isActive = U.combine([i, currentColor], R.equals);
            return (
              <li key={`color-${i}`} className={U.when(isActive, style.active)}>
                <button
                  style={{ backgroundColor: it, color: H.yiqFor(it) }}
                  onClick={U.doSet(currentColor, i)}
                >
                  {it}
                </button>
              </li>
            );
          }),
        )}
      </ul>
    </section>
  );
}

export default Palette;
