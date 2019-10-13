/**
 * @module Main
 */
import * as React from 'karet';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as T from './Main.d';

import SplashScene from './scenes/Splash';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function MainScene(props) {
  return (
    <main>
      <Router>
        <Route path="/draw" render={p => <div>{p.match.url}</div>} />
        <Route path="/" component={SplashScene} />
      </Router>
    </main>
  );
}

export default MainScene;
