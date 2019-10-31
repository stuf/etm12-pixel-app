import * as React from 'karet';
import * as U from 'karet.util';
import * as H from 'kefir.partial.lenses.history';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import EditorScene from 'scenes/Editor';

import { empty } from 'common/canvas';

import Button from 'components/ui/Button';

it('matches snapshot', () => {
  const size = [4, 4];

  const state = U.atom({
    canvas: { size, scale: 16 },
    color: { currentPalette: 0, currentColor: 0, palettes: [] },
  });

  const canvasData = U.atom(
    H.init({ maxCount: 10, replacePeriod: 200 }, empty(size)),
  );

  const w = mount(<EditorScene {...{ state, canvasData }} />);

  const w2 = mount(
    <EditorScene {...{ state, canvasData: canvasData.get() }} />,
  );

  const saveImageButton = w.find('#save-current-image').first();
  saveImageButton.simulate('click');

  state.view('size').set([16, 16]);
});
