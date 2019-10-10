import * as React from 'karet';
import { shallow } from 'enzyme';

import Bitmap from './index';

it('renders without crashing', () => {
  shallow(<Bitmap size={[32, 32]} scale={16} />);
});
