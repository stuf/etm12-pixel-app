import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'ramda';

import Canvas from './components/Canvas';
import Palette from './components/Palette';

import styles from './App.module.scss';

/**
 *
 * @param {Props} props
 */
function App({ state }) {
  const { size, scale } = U.thru(state, U.view('canvas'), U.destructure);

  return (
    <main className={styles.root}>
      <div>
        <Palette items={U.view(['color', 'palettes', 0, 'items'], state)} />
      </div>
      <div>
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
