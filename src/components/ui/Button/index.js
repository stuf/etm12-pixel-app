/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
import * as React from 'karet';
import * as U from 'karet.util';

import * as T from './index.d';
import style from './index.module.scss';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function Button({ children, action }) {
  return (
    <button
      className={style.root}
      onClick={U.actions(U.preventDefault, action)}
    >
      {children}
    </button>
  );
}

export default Button;
