/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module Range
 * @namespace components.form
 */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

function Range({
  value,
  min,
  max,
  step = 1,
  onChange,
  className,
  id = 'none',
}) {
  return (
    <div className={U.cns('formField', '--range', className)}>
      <U.Input
        {...{ type: 'range', value, min, max, step, onChange, list: id }}
      />

      <datalist id={id}>
        {U.thru(
          R.range(0, max),
          U.mapElems((it, i) => {
            const isFirst = R.equals(it, min);
            const isLast = R.equals(it, R.subtract(max, 1));
            const label = U.when(R.or(isFirst, isLast), it);

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

export default Range;
