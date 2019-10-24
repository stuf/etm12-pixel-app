import * as React from 'karet';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NotFoundScene from 'scenes/NotFound';

it('renders correctly', () => {
  const wrapper = shallow(<NotFoundScene />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
