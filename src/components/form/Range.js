/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module Range
 * @namespace components.form
 */
import * as React from 'karet';
import * as U from 'karet.util';

function Range({ value, min, max, step, onChange, className }) {
  return (
    <div className={U.cns('formField--range', className)}>
      <U.Input {...{ type: 'range', value, min, max, step, onChange }} />
    </div>
  );
}

export default Range;
