/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
import * as React from 'karet';
import * as U from 'karet.util';

import BuildInfo from './_/BuildInfo';

import * as T from './index.d';
import styles from './index.module.scss';

import logo from 'assets/logo.svg';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
export default function Header({ className, env }) {
  return (
    <header className={U.cns(styles.root, className)}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>

      <div className={styles.wrapper}>
        <BuildInfo {...{ env }} />
      </div>
    </header>
  );
}
