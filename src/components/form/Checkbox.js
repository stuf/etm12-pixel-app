import * as React from 'karet';
import * as U from 'karet.util';

export default function Checkbox({ label, value, className }) {
  return (
    <div className={U.cns('formField', '--checkbox', className)}>
      <label className="formField__label">
        <U.Input className="formField__input" type="checkbox" checked={value} />
        <span>{label}</span>
      </label>
    </div>
  );
}
