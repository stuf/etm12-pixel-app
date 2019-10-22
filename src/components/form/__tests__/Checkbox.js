import * as React from 'karet';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Checkbox from 'components/form/Checkbox';

it('renders correctly', () => {
  const wrapper = mount(<Checkbox />);
});
