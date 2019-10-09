/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
import * as React from 'karet';

import * as T from './index.d';
import style from './index.module.scss';

/**
 * @param {T.Props} props
 */
function Button({ children }) {
  return <button className={style.root}>{children}</button>;
}

export default Button;
