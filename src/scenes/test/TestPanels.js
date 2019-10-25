import * as React from 'karet';

import Panel from 'components/layout/Panel';

export default function TestPanelsScene(props) {
  return (
    <div style={{ height: '100%' }}>
      <Panel>
        <Panel direction="horizontal" size={30}>
          main top
        </Panel>
        <Panel direction="horizontal">
          <Panel size={200}>
            <Panel size={50}>left top (50px)</Panel>
            <Panel>left bottom</Panel>
          </Panel>
          <Panel>center auto width</Panel>
          <Panel size={200}>
            <Panel>right top</Panel>
            <Panel size={100}>right bottom (100px)</Panel>
          </Panel>
        </Panel>
        <Panel direction="horizontal" size={50}>
          bottom fullwidth (50px)
        </Panel>
      </Panel>
    </div>
  );
}

//

const json = [
  {
    children: [
      { direction: 'horizontal', size: 30, children: ['lul'] },
      {
        direction: 'horizontal',
        children: [
          { size: 200, children: [{ size: 50, children: 'left top (50px)' }] },
        ],
      },
    ],
  },
];
