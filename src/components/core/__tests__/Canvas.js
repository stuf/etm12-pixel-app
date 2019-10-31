import * as React from 'karet';
import * as U from 'karet.util';
import * as H from 'kefir.partial.lenses.history';
import { shallow, mount } from 'enzyme';
import state from 'core/state';
import canvasData from 'core/canvas-data';
import { itemsIn } from 'common/meta';

import Canvas from 'components/core/Canvas';

it('renders correctly', () => {
  // @todo Rewrite state-dependent tests to be less hacky
  const { canvas, color, devtool } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);
  const { currentColor, currentPalette, palettes } = U.destructure(color);
  const selectedPalette = U.view(currentPalette, palettes);
  const selectedColor = U.view(currentColor, itemsIn(selectedPalette));

  const wrap = mount(
    <Canvas
      {...{
        size,
        scale,
        data: U.view(H.present, canvasData),
        color: selectedColor,
      }}
    />,
  );
});
