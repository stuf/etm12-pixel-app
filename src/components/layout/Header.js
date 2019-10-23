/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
import * as React from 'karet';
import * as U from 'karet.util';

import BuildInfo from './_/BuildInfo';

import logo from 'assets/logo.svg';

export default function Header({ className, env }) {
  return (
    <header className={U.cns('layoutHeader', className)}>
      <div className="layoutHeader__logoWrapper">
        <img className="layoutHeader__logo" src={logo} alt="Logo" />
      </div>

      <div className="layoutHeader__wrapper">
        <BuildInfo {...{ env }} />
      </div>
    </header>
  );
}
