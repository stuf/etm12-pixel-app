import * as React from 'karet';
import * as U from 'karet.util';
import * as H from 'kefir.partial.lenses.history';
import { shallow, mount } from 'enzyme';
import state from 'core/state';
import canvasData from 'core/canvas-data';
import { itemsIn } from 'common/meta';

import Canvas from 'components/core/Canvas';

it('renders correctly', done => {
  // @todo Rewrite state-dependent tests to be less hacky
  const { canvas, color, devtool } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);
  const { currentColor, currentPalette, palettes } = U.destructure(color);
  const selectedPalette = U.view(currentPalette, palettes);
  const selectedColor = U.view(currentColor, itemsIn(selectedPalette));
  const dom = U.variable();

  const data = U.view(H.present, canvasData);

  const wrap = mount(
    <Canvas
      {...{
        dom,
        size,
        scale,
        data,
        color: selectedColor,
      }}
    />,
  );

  dom.take(1).onValue(
    /** @param {HTMLElement} el */
    el => {
      expect(el).toBeInstanceOf(HTMLElement);

      const c = wrap.find('.core-canvas');

      c.simulate('mousedown', { pageX: 1, pageY: 1 });
      c.simulate('mousemove', { pageX: 1, pageY: 1 });
      c.simulate('mouseup', { pageX: 2, pageY: 2 });

      done();
    },
  );
});
