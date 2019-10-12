/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module App
 */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';
import * as Z from 'kefir.partial.lenses.history';

import Field from './components/form/Field';
import Range from './components/form/Range';
import Canvas from './components/ui/Canvas';
import Palette from './components/ui/Palette';
import Menu from './components/ui/Menu';
import Details from './components/ui/Details';
import Bitmap from './components/ui/Bitmap';
import ColorStats from './components/ui/ColorStats';
import TimeControlButton from './components/ui/TimeControlButton';

import * as M from './meta';

import * as T from './App.d';
import styles from './App.module.scss';

/**
 * @param {T.Props} props
 */
function App({ state, canvasData, menuItems }) {
  const { canvas, color } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);
  const { currentColor, currentPalette, palettes } = U.destructure(color);

  const selectedPalette = U.view(currentPalette, palettes);

  return (
    <main className={styles.root}>
      <header className={styles.top}>
        <Menu {...{ items: menuItems }} />
      </header>

      <div className={styles.left}>
        <Details title="Tools">
          <ul className={U.cns(styles.toolgrid, 'unstyled-list')}>
            <li>
              <button>Eye dropper</button>
            </li>
            <li>
              <button>Pen</button>
            </li>
          </ul>
        </Details>
        <Details title="Palette">
          <fieldset>
            <legend>Switcher</legend>

            <select onChange={e => currentPalette.set(e.target.value)}>
              {U.thru(
                palettes,
                U.mapElems((it, i) => (
                  <option key={`palette-item-${i}`} value={i}>
                    {M.nameIn(it)}
                  </option>
                )),
              )}
            </select>
          </fieldset>

          <Palette
            {...{
              currentColor,
              name: U.view('name', selectedPalette),
              items: U.view('items', selectedPalette),
            }}
          />
        </Details>
      </div>

      <div className="relative-pos">
        <Canvas
          {...{ size, scale, color, canvasData: U.view(Z.present, canvasData) }}
        />
      </div>

      <div className={styles.right}>
        <Details title="Preview">
          <Bitmap
            {...{
              size,
              scale: 2,
              data: U.view(Z.present, U.skipUnless(R.identity, canvasData)),
            }}
          />
        </Details>

        <Details title="Image">
          <Field
            label="Name"
            value={U.view(['currentFile', 'name', L.valueOr('')], state)}
          />

          <fieldset>
            <legend>Controls</legend>

            <button>Clear image</button>
          </fieldset>
        </Details>

        <Details title="History">
          <div>{U.view(Z.count, canvasData).map(x => x - 1)}</div>

          <Range
            {...{
              value: U.view(Z.index, canvasData),
              min: 0,
              max: Z.indexMax(canvasData),
              onChange: U.getProps({
                valueAsNumber: U.view(Z.index, canvasData),
              }),
            }}
          />

          <fieldset>
            <legend>Controls</legend>

            <TimeControlButton count={U.view(Z.undoIndex, canvasData)}>
              Undo
            </TimeControlButton>
            <TimeControlButton count={U.view(Z.redoIndex, canvasData)}>
              Redo
            </TimeControlButton>
            <button onClick={U.doModify(canvasData, Z.undoForget)}>
              Purge history
            </button>
          </fieldset>
        </Details>

        <Details title="Canvas">
          <Field label="Width" value={U.view([0, M.wNumber], size)} />
          <Field label="Height" value={U.view([1, M.wNumber], size)} />
          <Field label="Scale" value={U.view(M.wNumber, scale)} />
        </Details>

        <Details title="Stats">
          <ColorStats data={U.view(Z.present, canvasData)} />
        </Details>
      </div>
    </main>
  );
}

export default App;

//

/**
 * @typedef {object} Props
 * @prop {typeof state} state
 * @prop {typeof canvasData} canvasData
 */
