import * as React from 'karet';
import * as U from 'karet.util';
import * as Z from 'kefir.partial.lenses.history';

import Canvas from './components/Canvas';
import Palette from './components/Palette';
import Menu from './components/ui/Menu';

import * as H from './shared';
import * as M from './meta';
import styles from './App.module.scss';

/**
 * @param {Props} props
 */
function App({ state, canvasData }) {
  const { canvas, color, menu } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);
  const { currentColor, currentPalette } = U.destructure(color);

  const undoIndex = U.atom(1);

  return (
    <main className={styles.root}>
      <header className={styles.top}>
        <Menu {...{ items: menu }} />
      </header>

      <div className={styles.left}>
        <Palette
          {...{
            currentColor,
            items: U.view(['palettes', currentPalette, 'items'], color),
          }}
        />
      </div>

      <div className="relative-pos">
        <h1>
          U have this many undo states :DDDD {' → '}
          {U.view(Z.count, canvasData).map(x => x - 1)}
        </h1>

        <fieldset>
          <legend>Undo my mistakes :(((</legend>

          <U.Input
            type="range"
            min={0}
            max={Z.indexMax(canvasData)}
            value={U.view(Z.index, canvasData)}
            onChange={U.getProps({
              valueAsNumber: U.view(Z.index, canvasData),
            })}
          />
        </fieldset>

        <Canvas
          {...{ size, scale, color, canvasData: U.view(Z.present, canvasData) }}
        />
      </div>

      <div className={styles.right}>
        <section>
          <header>Canvas</header>

          <div>
            <div>
              <label>
                Width
                <U.Input
                  {...{
                    type: 'range',
                    min: 4,
                    max: 64,
                    value: U.view([0, M.wNumber], size),
                  }}
                />
                {H.fstOf(size)}
              </label>
            </div>

            <div>
              <label>
                Height
                <U.Input
                  {...{
                    type: 'range',
                    min: 4,
                    max: 64,
                    value: U.view([1, M.wNumber], size),
                  }}
                />
                {H.sndOf(size)}
              </label>
            </div>

            <div>
              <label>
                Scale
                <U.Input
                  type="range"
                  min={4}
                  max={40}
                  value={U.view(M.wNumber, scale)}
                />
                {scale}
              </label>
            </div>
          </div>
        </section>
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
