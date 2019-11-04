/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

import { asDec } from 'common/util';

export default function Range(props) {
  const {
    value,
    min,
    max,
    tickFormat = R.identity,
    step = 1,
    onChange,
    className,
    id,
  } = props;

  return (
    <div className={U.cns('formField', '--range', className)}>
      <U.Input
        {...{
          type: 'range',
          value: U.view(L.normalize(asDec), value),
          min,
          max,
          step,
          onChange,
          list: id,
        }}
      />

      <datalist id={id} className="formField__ticks">
        {U.thru(
          R.range(min, max),
          U.mapElems((it, i) => {
            const isFirst = R.equals(it, min);
            const isLast = R.equals(it, R.subtract(max, 1));
            const label = U.when(R.or(isFirst, isLast), U.lift(tickFormat)(it));

            return (
              <option
                {...{
                  key: U.string`${id}-${i}`,
                  value: it,
                  label,
                }}
              >
                {it}
              </option>
            );
          }),
        )}
      </datalist>
    </div>
  );
}
