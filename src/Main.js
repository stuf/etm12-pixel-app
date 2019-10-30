/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module Main
 */
import * as React from 'karet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SplashScene from 'scenes/Splash';
import EditorScene from 'scenes/Editor';
import LoadImageScene from 'scenes/LoadImage';
import NotFoundScene from 'scenes/NotFound';
import TestPanelsScene from 'scenes/test/TestPanels';

function MainScene({ routerProps = {}, ...props }) {
  const WithRootProps = (Component, extra = {}) => p => (
    <Component {...{ ...props, ...p, ...extra }} />
  );

  return (
    <main className="layout--main debugRoot">
      <Router {...routerProps}>
        <Switch>
          <Route path="/load" component={WithRootProps(LoadImageScene)} />
          <Route path="/editor" component={WithRootProps(EditorScene)} />
          <Route
            exact
            path="/"
            component={WithRootProps(SplashScene, { redirectTo: '/editor' })}
          />
          <Route path="/test">
            <Switch>
              <Route
                path="/test/splash"
                component={WithRootProps(SplashScene)}
              />
              <Route path="/test/panels" component={TestPanelsScene} />
            </Switch>
          </Route>
          <Route component={WithRootProps(NotFoundScene)} />
        </Switch>
      </Router>
    </main>
  );
}

export default MainScene;
