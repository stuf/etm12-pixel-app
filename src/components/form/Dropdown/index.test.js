import * as React from 'karet';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import * as K from 'kefir';

import Index from './index';

it('matches snapshot', () => {
  const xs = [{ name: 'top' }, { name: 'kek' }];
  const xs$ = K.constant(xs);

  const w1 = mount(<Index />);
  const w2 = mount(<Index items={xs$} />);
  const w3 = mount(<Index items={xs} />);

  expect(toJson(w1)).toMatchSnapshot('empty dropdown');
  expect(toJson(w2)).toMatchSnapshot('non-empty dropdown');
  expect(toJson(w3)).toMatchSnapshot('non-empty dropdown (plain)');
});
