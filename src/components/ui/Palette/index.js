/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

import * as H from 'shared';

import * as T from './index.d';
import style from './index.module.scss';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function Palette({ name, items, currentColor }) {
  return (
    <section className={style.root}>
      <header>{name}</header>
      <ul className={style.items}>
        {U.thru(
          items,
          U.mapElems((it, i) => {
            const c = U.view(L.dropPrefix('#'), it);
            const isActive = U.combine([i, currentColor], R.equals);
            const color = c.map(H.fromHex);
            const backgroundColor = color.map(x => `rgba(${x.join()})`);

            return (
              <li key={`color-${i}`} className={U.when(isActive, style.active)}>
                <button
                  style={{ backgroundColor }}
                  onClick={U.doSet(currentColor, i)}
                />
              </li>
            );
          }),
        )}
      </ul>
    </section>
  );
}

export default Palette;
