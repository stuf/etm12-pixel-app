import * as React from 'karet';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Index from './Main';

it('matches snapshot', () => {
  const wrap = shallow(<Index />);
  expect(toJson(wrap)).toMatchSnapshot();
});
