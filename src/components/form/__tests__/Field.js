import * as React from 'karet';
import { shallow } from 'enzyme';

import Field from 'components/form/Field';

test('renders without crashing', () => {
  shallow(<Field />);
});
