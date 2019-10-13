/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module Main
 */
import * as React from 'karet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as T from './Main.d';
import styles from './Main.module.scss';

import SplashScene from 'scenes/Splash';
import DrawScene from 'scenes/Draw';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function MainScene(props) {
  return (
    <main className={styles.root}>
      <Router>
        <Switch>
          <Route
            path="/draw"
            render={p => <DrawScene {...{ ...p, ...props }} />}
          />
          <Route
            path="/"
            render={p => (
              <SplashScene {...{ ...p, ...props, redirectTo: '/draw' }} />
            )}
          />
        </Switch>
      </Router>
    </main>
  );
}

export default MainScene;
