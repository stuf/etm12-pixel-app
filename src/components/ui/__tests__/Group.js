import * as React from 'karet';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Group from 'components/ui/Group';

it('matches snapshot', () => {
  const wrap = mount(<Group title="Group title">Group content</Group>);
  expect(toJson(wrap)).toMatchSnapshot();
});
