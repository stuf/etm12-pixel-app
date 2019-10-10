import * as React from 'karet';
import { shallow } from 'enzyme';

import Details from './index';

it('renders without crashing', () => {
  shallow(<Details title="some details">some content</Details>);
});
