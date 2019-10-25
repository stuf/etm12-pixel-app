import * as React from 'karet';
import { constant as C } from 'kefir';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Panel from 'components/layout/Panel';

describe('components/ui/Panel', () => {
  it('renders correctly', () => {
    const verticalWrapper = mount(<Panel>content</Panel>);
    const horizontalWrapper = mount(
      <Panel direction="horizontal">content</Panel>,
    );

    expect(verticalWrapper.children().hasClass('vertical')).toBe(true);
    expect(horizontalWrapper.children().hasClass('horizontal')).toBe(true);
  });

  it('renders correctly with observable data', () => {
    const verticalWrapper = mount(
      <Panel direction={C('vertical')}>content</Panel>,
    );

    const children = verticalWrapper.childAt(0);
    expect(children.children('div').hasClass('vertical')).toBe(true);
  });
});
