import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'ramda';

import style from './Palette.module.scss';

function Palette({ items, currentColor }) {
  return (
    <div className={style.root}>
      <ul className={style.items}>
        {U.thru(
          items,
          U.mapElems((it, i) => {
            const isActive = U.combine([i, currentColor], R.equals);
            return (
              <li key={`color-${i}`} className={U.when(isActive, style.active)}>
                <button
                  style={{ backgroundColor: it }}
                  onClick={U.doSet(currentColor, i)}
                />
              </li>
            );
          }),
        )}
      </ul>
    </div>
  );
}

export default Palette;
