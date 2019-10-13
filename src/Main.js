/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module Main
 */
import * as React from 'karet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as T from './Main.d';
import styles from './Main.module.scss';

import SplashScene from 'scenes/Splash';
import EditorScene from 'scenes/Editor';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function MainScene(props) {
  const WithRootProps = (Component, extra = {}) => p => (
    <Component {...{ ...props, ...p, ...extra }} />
  );

  return (
    <main className={styles.root}>
      <Router>
        <Switch>
          <Route path="/editor" component={WithRootProps(EditorScene)} />
          <Route
            exact
            path="/"
            component={WithRootProps(SplashScene, { redirectTo: '/editor' })}
          />
          <Route
            render={p => (
              <div>Now why'd you have to go and come to this address.</div>
            )}
          />
        </Switch>
      </Router>
    </main>
  );
}

export default MainScene;
