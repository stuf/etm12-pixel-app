import * as React from 'karet';
import { shallow } from 'enzyme';

import Palette from './index';

it('renders without crashing with minimal data', () => {
  shallow(<Palette items={[]} />);
});
