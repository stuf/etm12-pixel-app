import * as React from 'karet';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Menu from './index';

it('renders without crashing', () => {
  const w1 = shallow(<Menu items={[]} />);

  const w2 = shallow(
    <Menu
      items={[{ label: 'test 1' }, { label: 'test 2' }, { label: 'test 3' }]}
    />,
  );

  expect(toJson(w1)).toMatchSnapshot('menu with no items');
  expect(toJson(w2)).toMatchSnapshot('menu with items');
});
