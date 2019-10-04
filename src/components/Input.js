import * as React from 'karet';
import * as U from 'karet.util';

import styles from './Input.module.scss';

function Input({ value, className }) {
  return <U.Input {...{ value, className: U.cns(className, styles.root) }} />;
}

export default Input;
