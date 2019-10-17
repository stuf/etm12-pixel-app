import React from 'react';
import { mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Index from './index';

it('matches snapshot', () => {
  const xs = [{ name: 'top' }, { name: 'kek' }];

  const w1 = mount(<Index />);
  const w2 = mount(<Index items={xs} />);

  expect(toJson(w1)).toMatchSnapshot('empty dropdown');
  expect(toJson(w2)).toMatchSnapshot('non-empty dropdown');
});

it('allows setting a value to an atom', () => {
  const value = { set: jest.fn() };
  const xs = [{ name: 'top' }, { name: 'kek' }];

  const w = mount(<Index items={xs} value={value} />);
  w.find('select').simulate('change', { target: { value: 123 } });

  expect(value.set).toHaveBeenCalled();
});
