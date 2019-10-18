import * as React from 'karet';
import * as U from 'karet.util';
import * as H from 'kefir.partial.lenses.history';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Index from './index';
import originalState from 'core/state';

let state;

beforeEach(() => {
  state = U.atom(originalState.get());
  state
    .view(['currentFile', 'createdAt'])
    .set(new Date('2019-10-18T21:24:25.594Z'));
});

it('works shallowly', () => {
  const canvasData = U.atom([]);
  const { canvas, color } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);

  const wrap = shallow(<Index {...{ size, scale, color, canvasData }} />);

  expect(toJson(wrap)).toMatchSnapshot('shallow snapshot');
});

it('works less shallowly', () => {
  const canvasData = U.atom(H.init({}, []));
  const { canvas, color } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);

  const wrap = mount(<Index {...{ size, scale, color, canvasData }} />);

  expect(toJson(wrap)).toMatchSnapshot('deep snapshot');
});
