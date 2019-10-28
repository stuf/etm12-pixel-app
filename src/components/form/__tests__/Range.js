import * as React from 'karet';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Range from 'components/form/Range';

it('renders properly', () => {
  const wrapper = mount(<Range min={0} max={10} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
