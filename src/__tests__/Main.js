import * as React from 'karet';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import state from 'core/state';
import canvasData from 'core/canvas-data';

import Main from '../Main';

it('matches snapshot', () => {
  const wrap = shallow(<Main />);
  expect(toJson(wrap)).toMatchSnapshot();
});

it('works', () => {
  const wrapper = mount(<Main />);
});
