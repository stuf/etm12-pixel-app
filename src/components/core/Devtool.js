import * as React from 'karet';
import * as U from 'karet.util';
import * as L from 'kefir.partial.lenses';

import { Checkbox } from 'components/form';

export function FlagToggleList({ items }) {
  const keys = L.collect(L.keys, items);

  return (
    <section>
      {U.thru(
        keys,
        U.mapElems((it, i) => (
          <Checkbox key={`flag-${i}`} label={it} value={U.view(it, items)} />
        )),
      )}
    </section>
  );
}
