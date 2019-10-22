import * as React from 'karet';
import { shallow } from 'enzyme';

import Range from 'components/form/Range';

it('renders without crashing', () => {
  shallow(<Range />);
});
