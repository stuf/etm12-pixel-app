/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';
import * as L from 'kefir.partial.lenses';

import * as M from 'common/meta';

export default function Dropdown({
  items,
  value,
  onChange = e => value.set(e.target.value),
  className,
}) {
  return (
    <div className={U.cns('formField', '--dropdown', className)}>
      {U.when(
        items,
        <select {...{ onChange }}>
          {U.thru(
            U.view(L.valueOr([]), items),
            U.mapElems((it, i) => (
              <option {...{ key: i, value: i }}>{M.nameIn(it)}</option>
            )),
          )}
        </select>,
      )}
    </div>
  );
}
