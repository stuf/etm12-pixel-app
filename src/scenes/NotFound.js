/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';

function NotFoundScene() {
  return (
    <section className={U.cns('not-found-root', 'scene-root')}>
      <header>Not found</header>

      <p>Now why'd you have and come to a place that doesn't exist</p>
    </section>
  );
}

export default NotFoundScene;
