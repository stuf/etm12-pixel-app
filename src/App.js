import * as React from 'karet';
import * as U from 'karet.util';

import Canvas from './components/Canvas';
import Palette from './components/Palette';

import styles from './App.module.scss';

/**
 * @param {Props} props
 */
function App({ state, canvasData }) {
  const { canvas, color } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);
  const { currentColor, currentPalette } = U.destructure(color);

  return (
    <main className={styles.root}>
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
