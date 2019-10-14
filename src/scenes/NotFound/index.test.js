import * as React from 'karet';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Index from './index';

it('renders correctly', () => {
  const wrapper = shallow(<Index />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
