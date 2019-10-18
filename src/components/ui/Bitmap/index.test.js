import * as React from 'karet';
import * as U from 'karet.util';
import { mount, shallow } from 'enzyme';

import Bitmap from './index';

let state;
let data;

//

beforeEach(() => {
  state = U.atom({ size: [1, 1], scale: 1 });
  data = U.atom([0, 0, 0, 0]);
});

//

it('renders without crashing', () => {
  const { size, scale } = U.destructure(state);
  mount(<Bitmap {...{ size, scale, data }} />);
});

it('updates image data', () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const dom = U.atom(canvas);

  const { size, scale } = U.destructure(state);
  const wrap = mount(<Bitmap {...{ size, scale, data, dom }} />);

  expect(ctx.putImageData).toHaveBeenCalledWith(
    new ImageData(new Uint8ClampedArray([0, 0, 0, 0]), 1, 1),
    0,
    0,
  );
});
