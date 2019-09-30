import * as React from 'karet';
import * as U from 'karet.util';

import Canvas from './components/Canvas';
import Palette from './components/Palette';
import PixelGrid from './components/PixelGrid';

import styles from './App.module.scss';

/**
 *
 * @param {Props} props
 */
function App({ state }) {
  const { size, scale } = U.thru(state, U.view('canvas'), U.destructure);
  const { currentColor } = U.thru(state, U.view('color'), U.destructure);

  return (
    <main className={styles.root}>
      <div className={styles.left}>
        <Palette
          {...{ currentColor }}
          items={U.view(['color', 'palettes', 0, 'items'], state)}
        />
      </div>
      <div className="relative-pos">
        <PixelGrid {...{ size, scale }} />
        <Canvas {...{ size, scale }} />
      </div>
    </main>
  );
}

export default App;

//

/**
 * @typedef {object} Props
 * @prop {object} state
 */
