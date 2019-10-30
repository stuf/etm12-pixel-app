import * as React from 'karet';
import * as U from 'karet.util';

import Group from 'components/ui/Group';

import { FlagToggleList } from 'components/core/Devtool';

export default function DevtoolsPanel(props) {
  const { devtool } = props;
  return (
    <Group title="Devtools">
      <FlagToggleList items={U.view('flags', devtool)} />
    </Group>
  );
}
