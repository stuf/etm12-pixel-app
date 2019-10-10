import * as React from 'karet';
import { shallow } from 'enzyme';

import Field from './index';

test('renders without crashing', () => {
  shallow(<Field />);
});
