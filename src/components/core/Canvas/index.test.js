import * as React from 'karet';
import * as U from 'karet.util';
import { shallow, mount } from 'enzyme';

import Canvas from './index';

it('renders correctly', () => {
  const state = U.atom({
    size: [32, 32],
    scale: 16,
  });

  const { size, scale, color } = U.destructure(state);

  const wrap = shallow(<Canvas {...{ size, scale, color }} />);
});
