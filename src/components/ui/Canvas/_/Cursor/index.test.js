import * as React from 'karet';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Index from './index';

it('calculates the correct position', () => {
  const pos = [2, 4];
  const scale = 16;

  const wrap = shallow(<Index {...{ pos, scale }} />);

  expect(wrap.prop('style')).toEqual({
    width: scale,
    height: scale,
    transform: `translateX(${pos[0] * scale}px) translateY(${pos[1] *
      scale}px)`,
  });
});

it('matches snapshot', () => {
  const pos = [2, 4];
  const scale = 16;

  const wrap = shallow(<Index {...{ pos, scale }} />);

  expect(toJson(wrap)).toMatchSnapshot();
});
