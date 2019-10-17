import * as React from 'karet';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as K from 'kefir';

import { testEq } from 'test-utils';

import Index from './index';

it('snapshot test', () => {
  const w = shallow(<Index />);
  expect(toJson(w)).toMatchSnapshot('with empty data');
});

it('displays correct element based on isEditing prop', () => {
  const w = shallow(<Index {...{ isEditing: false, name: 'Untitled 123' }} />);
  expect(w.find('.nameLabel').text()).toBe('Untitled 123');

  const w2 = render(<Index {...{ isEditing: true, name: 'Untitled 123' }} />);
  expect(w2.find('.nameLabel')).toHaveLength(0);
  expect(w2.find('input')).not.toHaveLength(0);
});
