import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

const C = R.always;
const eq = R.equals;

export default function Panel({ direction = 'vertical', size, children }) {
  const style = {};

  const size$ = U.thru(
    U.combine([direction, size], (d, s) => ({
      [R.ifElse(eq('vertical'), C('height'), C('width'))(d)]: s,
    })),
  );

  if (size) {
    style[direction === 'vertical' ? 'height' : 'width'] = size;
  }

  const childs = React.Children.toArray(children);
  const childSizes = L.collectTotal([L.elems, 'props', 'size'], childs);

  const gridDirection = `gridTemplate${
    direction === 'vertical' ? 'Rows' : 'Columns'
  }`;

  const gridTemplate = childSizes.map(
    R.ifElse(R.identity, x => `${x}px`, R.always('auto')),
  );

  return (
    <div
      className={U.cns('panelRoot', direction)}
      style={{ [gridDirection]: gridTemplate.join(' ') }}
    >
      {children}
    </div>
  );
}
