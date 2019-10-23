import * as React from 'karet';
import * as U from 'karet.util';

import { Checkbox } from 'components/form';

export default function Devtool({ flags }) {
  const offsetGuidesIn = U.view('offsetGuide');
  return (
    <section>
      <Checkbox label="Offset guides" value={offsetGuidesIn(flags)} />
    </section>
  );
}
