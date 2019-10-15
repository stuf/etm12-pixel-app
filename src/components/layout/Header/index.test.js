import * as React from 'karet';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Index from './index';

it('renders without crashing', () => {
  render(
    <Index
      {...{ menuItems: [], isEditing: false, env: {}, name: 'From test' }}
    />,
  );
});
