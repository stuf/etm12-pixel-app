/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';

import * as T from './index.d';
import styles from './index.module.scss';

/**
 * @return {T.Component}
 */
function NotFoundScene() {
  return (
    <article className={U.cns(styles.root, 'scene-root')}>
      <header>Not found</header>

      <p>Now why'd you have and come to a place that doesn't exist</p>
    </article>
  );
}

export default NotFoundScene;
