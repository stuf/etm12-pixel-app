/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module Range
 * @namespace components.form
 */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

export default function Range(props) {
  const {
    value,
    min,
    max,
    showTick = R.F,
    tickFormat = R.identity,
    step = 1,
    onChange,
    className,
    id,
  } = props;

  return (
    <div className={U.cns('formField', '--range', className)}>
      <U.Input
        {...{ type: 'range', value, min, max, step, onChange, list: id }}
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
