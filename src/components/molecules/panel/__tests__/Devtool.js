import * as React from 'karet';
import { mount } from 'enzyme';

import Devtool from 'components/molecules/panel/Devtool';

it('renders at all', () => {
  const wrapper = mount(<Devtool flags={{ foo: true, bar: false }} />);

  expect(wrapper.find('input[type="checkbox"]')).toHaveLength(2);
});
