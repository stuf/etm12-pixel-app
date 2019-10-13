/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module SplashScene
 * @namespace scenes
 */
import * as React from 'karet';
import * as U from 'karet.util';
import * as K from 'kefir';

import * as T from './index.d';
import styles from './index.module.scss';

import { takeAll } from 'shared';
import logo from 'assets/logo.svg';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function SplashScene({ redirectTo, history }) {
  const redirectDelay = K.later(5000).toProperty();

  const redirectEff = U.thru(
    U.combine([redirectTo, redirectDelay], takeAll),
    U.consume(([path]) => {
      history.replace(path);
    }),
  );

  const sinkEff = U.sink(U.parallel([redirectEff]));

  return (
    <div className={U.cns('scene-root', styles.root)} data-scene-name="splash">
      <>{sinkEff}</>
      <img src={logo} className={styles.logo} alt="pixel" />
    </div>
  );
}

export default SplashScene;
