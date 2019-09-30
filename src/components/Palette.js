import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'ramda';

import style from './Palette.module.scss';

function Palette({ items }) {
  return (
    <div className={style.root}>
      <ul className={style.items}>
        {U.thru(
          items,
          U.mapValue(
            R.map(it => (
              <li key={it}>
                <button
                  style={{
                    backgroundColor: it,
                  }}
                ></button>
              </li>
            )),
          ),
        )}
      </ul>
    </div>
  );
}

export default Palette;
