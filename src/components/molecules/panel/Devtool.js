import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

import { Checkbox } from 'components/form';

export default function Devtool({ flags }) {
  const offsetGuidesIn = U.view('offsetGuide');
  return (
    <section>
      <Checkbox label="Offset guides" value={offsetGuidesIn(flags)} />
    </section>
  );
}
