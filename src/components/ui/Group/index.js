import * as React from 'karet';

import styles from './index.module.scss';

export default function Group({ children, title }) {
  return (
    <section className={styles.root}>
      <header className={styles.header}>{title}</header>

      <div className={styles.content}>{children}</div>
    </section>
  );
}
