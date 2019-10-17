/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module ImageName
 * @namespace components.layout.Header._
 */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import * as T from './index.d';
import styles from './index.module.scss';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function ImageName({ name, isEditing }) {
  const toggleFlag = U.doModify(isEditing, R.not);

  return (
    <div className={U.cns(styles.root, 'flex-horizontal', '-vertical-center')}>
      {U.ifElse(
        isEditing,
        <div className="is-editing">
          <U.Input value={name} />
        </div>,
        <span className={styles.nameLabel} onClick={toggleFlag}>
          {name}
        </span>,
      )}
    </div>
  );
}

export default ImageName;
