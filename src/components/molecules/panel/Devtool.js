import * as React from 'karet';
import * as U from 'karet.util';
import * as L from 'kefir.partial.lenses';

import { Checkbox } from 'components/form';

export default function Devtool({ flags }) {
  const offsetGuidesIn = U.view('offsetGuide');

  const keys = L.collect(L.keys, flags);

  return (
    <section>
      {U.thru(
        keys,
        U.mapElems((it, i) => (
          <Checkbox key={`flag-${i}`} label={it} value={U.view(it, flags)} />
        )),
      )}
    </section>
  );
}
