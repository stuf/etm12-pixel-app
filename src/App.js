import * as React from 'karet';
import * as U from 'karet.util';

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
        <Canvas {...{ size, scale, color, canvasData }} />
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
