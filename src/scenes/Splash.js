/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module SplashScene
 * @namespace scenes
 */
import * as React from 'karet';
import * as U from 'karet.util';

import { takeAll } from 'shared';
import Panel from 'components/layout/Panel';
import logo from 'assets/logo.svg';

function SplashScene({ redirectTo, redirectDelay = 2000, history }) {
  const delay = U.thru(
    redirectDelay,
    U.flatMapLatest(n => U.later(n, null)),
    U.toProperty,
  );

  const redirectEff = U.thru(
    U.combine([redirectTo, delay], takeAll),
    U.consume(([path]) => history.replace(path)),
  );

  const sinkEff = U.sink(U.when(redirectTo, redirectEff));

  return (
    <section className={U.cns('scene-root', 'splash-root')}>
      <>{sinkEff}</>
      <Panel>
        <div className="splash-logo">
          <img src={logo} alt="pixel" />
          <h1>pixel</h1>
        </div>
      </Panel>
    </section>
  );
}

export default SplashScene;
