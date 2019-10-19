import * as React from 'karet';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PixelGrid from './PixelGrid';

it('matches snapshot', () => {
  const wrap = shallow(<PixelGrid {...{ size: [32, 32], scale: 16 }} />);
  expect(toJson(wrap)).toMatchSnapshot();
});
