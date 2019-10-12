/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
import * as React from 'karet';
import * as U from 'karet.util';

import Menu from '../../ui/Menu';
import ImageName from './_/ImageName';

import * as T from './index.d';
import styles from './index.module.scss';

import logo from '../../../assets/logo.svg';

/**
 * @type {T.Props} props
 * @return {T.Component}
 */
function Header({ menuItems, className, name, isEditing }) {
  return (
    <header className={U.cns(styles.root, className)}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>

      <div className={styles.wrapper}>
        <Menu items={menuItems} />

        <ImageName {...{ name, isEditing }} />
      </div>
    </header>
  );
}

export default Header;
