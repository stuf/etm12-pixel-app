/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module Field
 * @namespace components.form
 */
import * as React from 'karet';
import * as U from 'karet.util';

function Field({ label, value, className }) {
  return (
    <div className={U.cns('formField--field', className)}>
      <label>{label}</label>

      <U.Input value={value} type="text" />
    </div>
  );
}

export default Field;
