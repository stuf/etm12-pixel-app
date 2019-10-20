import * as React from 'karet';
import { shallow } from 'enzyme';

import OffsetGuide from './OffsetGuide';

it('renders correctly', () => {
  shallow(<OffsetGuide offset={[0, 0]} />);
});
