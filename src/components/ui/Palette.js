/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

import * as H from 'shared';
import backgroundImage from 'assets/transparency.png';

function Palette({ items, currentColor }) {
  return (
    <section className={'palette'}>
      <ul className={'palette__itemList'}>
        {U.thru(
          U.view(L.valueOr([]), items),
          U.mapElems((it, i) => {
            const c = U.view(L.dropPrefix('#'), it);
            const isActive = U.combine([i, currentColor], R.equals);
            const color = U.mapValue(H.fromHex, c);
            const backgroundColor = U.mapValue(
              x => `rgb(${x.slice(0, 3).join()})`,
              color,
            );

            return (
              <li
                key={`color-${i}`}
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                }}
                className={U.cns('itemList__item', U.when(isActive, '-active'))}
              >
                <button
                  style={{
                    backgroundColor,
                    opacity: U.mapValue(x => x / 255, U.view(3, color)),
                  }}
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

//

export default Palette;
