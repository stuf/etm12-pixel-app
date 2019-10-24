import * as React from 'karet';
import { shallow } from 'enzyme';

import TimeControlButton from 'components/ui/TimeControlButton';

it('renders without crashing', () => {
  shallow(<TimeControlButton>undo</TimeControlButton>);
});
