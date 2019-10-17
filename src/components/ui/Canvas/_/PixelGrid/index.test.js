import * as React from 'karet';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Index from './index';

it('matches snapshot', () => {
  const wrap = shallow(<Index {...{ size: [32, 32], scale: 16 }} />);
  expect(toJson(wrap)).toMatchSnapshot();
});
