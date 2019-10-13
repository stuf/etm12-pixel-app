/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module DrawScene
 * @namespace scenes
 */
import * as React from 'karet';
import * as U from 'karet.util';

import * as T from './index.d';
import styles from './index.module.scss';

import App from 'App';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function DrawScene(props) {
  console.log({ props });

  return (
    <div className={U.cns('scene-root', styles.root)} data-scene-name="draw">
      <App {...props} />
    </div>
  );
}

export default DrawScene;
