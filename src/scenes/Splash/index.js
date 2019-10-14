/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module SplashScene
 * @namespace scenes
 */
import * as React from 'karet';
import * as U from 'karet.util';

import * as T from './index.d';
import styles from './index.module.scss';

import { takeAll } from 'shared';
import logo from 'assets/logo.svg';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
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

  const sinkEff = U.sink(redirectEff);

  return (
    <div className={U.cns('scene-root', styles.root)} data-scene-name="splash">
      <>{sinkEff}</>
      <div className={styles.logo}>
        <img src={logo} alt="pixel" />
        <h1>pixel</h1>
      </div>
    </div>
  );
}

export default SplashScene;
