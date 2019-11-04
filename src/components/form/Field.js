/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';

function Field({ label, value, className }) {
  return (
    <div className={U.cns('formField --field', className)}>
      <label className="formField__label">{label}</label>

      <U.Input className="formField__textInput" value={value} type="text" />
    </div>
  );
}

export default Field;
