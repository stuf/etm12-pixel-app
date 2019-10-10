import * as React from 'karet';
import { shallow } from 'enzyme';

import Menu from './index';

it('renders without crashing with minimal data', () => {
  shallow(<Menu items={[]} />);
});
