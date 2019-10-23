/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module ImageName
 * @namespace components.layout.Header._
 */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

function ImageName({ name, isEditing }) {
  const toggleFlag = U.doModify(isEditing, R.not);

  return (
    <div className={U.cns('imageName', 'flex-horizontal', '-vertical-center')}>
      {U.ifElse(
        isEditing,
        <div className="imageName__nameDisplay is-editing">
          <U.Input value={name} />
        </div>,
        <span className="imageName__nameLabel" onClick={toggleFlag}>
          {name}
        </span>,
      )}
    </div>
  );
}

export default ImageName;
