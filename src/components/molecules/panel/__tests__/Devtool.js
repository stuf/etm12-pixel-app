import * as React from 'karet';
import { shallow } from 'enzyme';

import Devtool from 'components/molecules/panel/Devtool';

it('renders at all', () => {
  shallow(<Devtool />);
});
