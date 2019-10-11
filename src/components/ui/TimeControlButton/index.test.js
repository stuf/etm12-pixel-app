import * as React from 'karet';
import { shallow } from 'enzyme';

import TimeControlButton from './index';

it('renders without crashing', () => {
  shallow(<TimeControlButton>undo</TimeControlButton>);
});
