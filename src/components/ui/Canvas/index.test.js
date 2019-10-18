import * as React from 'karet';
import * as K from 'kefir';
import * as U from 'karet.util';
import * as L from 'kefir.partial.lenses';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import jestKefir from 'jest-kefir';

import Index from './index';
import originalState from 'core/state';

const { activate, extensions, value } = jestKefir(K);
expect.extend(extensions);

let state;
let canvasData;

beforeEach(() => {
  state = U.atom(originalState.get());
  state
    .view(['currentFile', 'createdAt'])
    .set(new Date('2019-10-18T21:24:25.594Z'));

  canvasData = U.atom([]);
});

it('works shallowly', () => {
  const { canvas, color } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);

  const wrap = shallow(
    <Index {...{ size, scale, color, canvasData: U.atom([]) }} />,
  );
});

it('works less shallowly', () => {
  const { canvas, color } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);

  const wrap = mount(<Index {...{ size, scale, color, canvasData }} />);

  U.view(L.slice(0, 4), canvasData).set([255, 255, 0, 127]);

  expect(canvasData.get().slice(0, 4)).toEqual([255, 255, 0, 127]);
  expect(toJson(wrap)).toMatchSnapshot('deep snapshot');
});
