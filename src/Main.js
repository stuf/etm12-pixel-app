/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module Main
 */
import * as React from 'karet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SplashScene from 'scenes/Splash';
import EditorScene from 'scenes/Editor';
import NotFoundScene from 'scenes/NotFound';

function MainScene({ routerProps = {}, ...props }) {
  const WithRootProps = (Component, extra = {}) => p => (
    <Component {...{ ...props, ...p, ...extra }} />
  );

  return (
    <main className="layout--main">
      <Router {...routerProps}>
        <Switch>
          <Route path="/editor" component={WithRootProps(EditorScene)} />
          <Route
            exact
            path="/"
            component={WithRootProps(SplashScene, { redirectTo: '/editor' })}
          />
          <Route component={WithRootProps(NotFoundScene)} />
        </Switch>
      </Router>
    </main>
  );
}

export default MainScene;
