import * as React from 'karet';

import style from './Button.module.scss';

function Button({ children }) {
  return <button className={style.root}>{children}</button>;
}

export default Button;
