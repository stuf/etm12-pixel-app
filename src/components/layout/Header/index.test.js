import * as React from 'karet';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Index from './index';

it('matches snapshot', () => {
  const w = render(
    <Index
      {...{ menuItems: [], isEditing: false, env: {}, name: 'From test' }}
    />,
  );

  expect(toJson(w)).toMatchSnapshot('LayoutHeader minimal data');
});
