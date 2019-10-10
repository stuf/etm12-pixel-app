import * as React from 'karet';
import { shallow } from 'enzyme';

import Button from './index';

it('renders without crashing', () => {
  shallow(<Button>123</Button>);
});
