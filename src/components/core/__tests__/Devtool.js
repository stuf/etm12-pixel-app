import * as React from 'karet';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { FlagToggleList } from 'components/core/Devtool';

describe('Devtool', () => {
  it('FlagToggleList', () => {
    const wrapper = mount(<FlagToggleList items={{}} />);
    expect(wrapper.find('input')).toHaveLength(0);

    const wrapper2 = mount(<FlagToggleList items={{ foo: 1, bar: 2 }} />);
    const labels = wrapper2.find('label > span').map(it => it.text());

    expect(labels).toEqual(['foo', 'bar']);
  });
});
