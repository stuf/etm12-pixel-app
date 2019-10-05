import * as React from 'karet';

import * as T from './Button';

import style from './Button.module.scss';

/**
 * @param {T.Props} props
 */
function Button({ children }) {
  return <button className={style.root}>{children}</button>;
}

export default Button;
