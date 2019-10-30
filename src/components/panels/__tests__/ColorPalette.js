import * as React from 'karet';
import * as U from 'karet.util';
import { mount } from 'enzyme';

import state from 'core/state';
import ColorPalette from 'components/panels/ColorPalette';

describe('ColorPalette', () => {
  it('renders correctly without items', () => {
    const { color } = U.destructure(state);
    const { currentColor, currentPalette, palettes } = U.destructure(color);

    const wrapper = mount(
      <ColorPalette {...{ currentColor, currentPalette }} />,
    );
  });

  it('renders correctly with items', () => {
    const { color } = U.destructure(state);
    const { currentColor, currentPalette, palettes } = U.destructure(color);

    const wrapper = mount(
      <ColorPalette {...{ currentColor, currentPalette, palettes }} />,
    );

    wrapper
      .find('.colorPalette__palette')
      .at(1)
      .find('.colorPalette__colorButton')
      .at(2)
      .simulate('click');

    expect(currentPalette.get()).toBe(1);
    expect(currentColor.get()).toBe(2);
  });
});
