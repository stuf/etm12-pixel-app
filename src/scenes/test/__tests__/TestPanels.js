import * as React from 'karet';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import TestPanelsScene from 'scenes/test/TestPanels';

describe('TestPanelsScene', () => {
  it('renders and matches snapshot', () => {
    const wrapper = mount(<TestPanelsScene />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
