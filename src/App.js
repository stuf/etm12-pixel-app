/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module App
 */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';
import * as Z from 'kefir.partial.lenses.history';

import Canvas from './components/Canvas';
import Palette from './components/Palette';
import Menu from './components/ui/Menu';
import Details from './components/ui/Details';
import Field from './components/form/Field';
import Bitmap from './components/Bitmap';

import * as M from './meta';

import * as T from './App.d';
import styles from './App.module.scss';

/**
 * @param {T.Props} props
 */
function App({ state, canvasData, menuItems }) {
  const { canvas, color } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);
  const { currentColor, currentPalette } = U.destructure(color);

  const selectedPalette = U.view(['palettes', currentPalette], color);

  return (
    <main className={styles.root}>
      <header className={styles.top}>
        <Menu {...{ items: menuItems }} />
      </header>

      <div className={styles.left}>
        <Details title="Palette">
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
        </Details>

        <Details title="History">
          <div>{U.view(Z.count, canvasData).map(x => x - 1)}</div>

          <U.Input
            type="range"
            min={0}
            max={Z.indexMax(canvasData)}
            value={U.view(Z.index, canvasData)}
            onChange={U.getProps({
              valueAsNumber: U.view(Z.index, canvasData),
            })}
          />

          <fieldset>
            <legend>Controls</legend>

            <button>Undo</button>
            <button>Redo</button>
            <button>Purge history</button>
          </fieldset>
        </Details>

        <Details title="Canvas">
          <Field label="Width" value={U.view([0, M.wNumber], size)} />
          <Field label="Height" value={U.view([1, M.wNumber], size)} />
          <Field label="Scale" value={U.view(M.wNumber, scale)} />
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
