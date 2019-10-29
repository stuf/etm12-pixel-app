import * as React from 'karet';
import * as U from 'karet.util';

import { nameIn, itemsIn } from 'common/meta';

import Group from 'components/ui/Group';

export default function Palette(props) {
  const { currentPalette, currentColor, palettes } = props;

  return (
    <Group title="Palette">
      <code>
        {currentPalette}, {currentColor}
      </code>
      {U.thru(
        palettes,
        U.mapElems((p, pi) => (
          <div key={pi}>
            {nameIn(p)}

            <ul className="colorPalette__colorList">
              {U.thru(
                itemsIn(p),
                U.mapElems((c, ci) => (
                  <li key={ci} className="colorPalette__colorListItem">
                    <button className="colorPalette__colorButton" />
                  </li>
                )),
              )}
            </ul>
          </div>
        )),
      )}
    </Group>
  );
}
