import * as React from 'karet';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Index from './index';

it('matches snapshot', () => {
  const wrap = mount(<Index title="Group title">Group content</Index>);
  expect(toJson(wrap)).toMatchSnapshot();
});
