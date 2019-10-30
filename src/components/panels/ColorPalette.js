import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

import { nameIn, itemsIn } from 'common/meta';
import { convertFromHexColor } from 'common/canvas';

import Group from 'components/ui/Group';

export default function Palette(props) {
  const actions = U.serializer();

  const { currentPalette, currentColor, palettes } = props;

  const tupleToRgba = U.lift(
    ([r, g, b, a]) => `rgba(${r},${g},${b},${a / 255})`,
  );

  return (
    <Group title="Palette">
      <>{U.sink(actions)}</>

      {U.thru(
        U.view(L.valueOr([]), palettes),
        U.mapElems((p, pi) => (
          <section
            key={pi}
            className={U.cns(
              'colorPalette__palette',
              U.when(R.equals(currentPalette, pi), '--active'),
            )}
          >
            <header className="colorPalette__header">{nameIn(p)}</header>

            <ul className="colorPalette__colorList">
              {U.thru(
                U.view([L.valueOr([]), L.array(L.dropPrefix('#'))], itemsIn(p)),
                U.mapElems((c, ci) => (
                  <li
                    key={ci}
                    className={U.cns(
                      'colorPalette__colorListItem',
                      U.when(
                        R.and(
                          R.equals(currentPalette, pi),
                          R.equals(currentColor, ci),
                        ),
                        '--active',
                      ),
                    )}
                  >
                    <button
                      className={U.cns('colorPalette__colorButton')}
                      style={{
                        backgroundColor: tupleToRgba(convertFromHexColor(c)),
                      }}
                      onClick={U.doPush(actions, () =>
                        U.holding(() => {
                          currentPalette.set(pi);
                          currentColor.set(ci);
                        }),
                      )}
                    />
                  </li>
                )),
              )}
            </ul>
          </section>
        )),
      )}
    </Group>
  );
}
