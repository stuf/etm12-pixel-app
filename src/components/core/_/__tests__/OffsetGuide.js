import * as React from 'karet';
import { shallow } from 'enzyme';

import OffsetGuide from 'components/core/_/OffsetGuide';

it('renders correctly', () => {
  shallow(<OffsetGuide offset={[0, 0]} />);
});
