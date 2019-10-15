import * as React from 'karet';
import { shallow } from 'enzyme';

import Menu from './index';

it('renders without crashing', () => {
  shallow(<Menu items={[]} />);

  shallow(
    <Menu
      items={[{ label: 'test 1' }, { label: 'test 2' }, { label: 'test 3' }]}
    />,
  );
});
