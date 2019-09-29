import * as React from 'karet';
import * as U from 'karet.util';

import Canvas from './components/Canvas';

/**
 *
 * @param {Props} props
 */
function App({ state }) {
  const { size, scale } = U.thru(state, U.view('canvas'), U.destructure);

  return (
    <main>
      <Canvas {...{ size, scale }} />
    </main>
  );
}

export default App;

//

/**
 * @typedef {object} Props
 * @prop {object} state
 */
