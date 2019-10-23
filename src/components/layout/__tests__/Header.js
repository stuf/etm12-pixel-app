import * as React from 'karet';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import LayoutHeader from 'components/layout/Header';

it('matches snapshot', () => {
  const w = render(
    <LayoutHeader
      {...{ menuItems: [], isEditing: false, env: {}, name: 'From test' }}
    />,
  );

  expect(toJson(w)).toMatchSnapshot('LayoutHeader minimal data');
});
