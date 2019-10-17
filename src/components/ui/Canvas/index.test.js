import * as React from 'karet';
import * as U from 'karet.util';
import * as H from 'kefir.partial.lenses.history';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Index from './index';
import state from 'core/state';

it('works shallowly', () => {
  const canvasData = U.atom([]);
  const { size, scale, color } = U.destructure(state);

  shallow(<Index {...{ size, scale, color, canvasData }} />);
});
