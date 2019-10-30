import * as React from 'karet';
import { mount } from 'enzyme';

import Devtools from 'components/panels/Devtools';

describe('Devtools', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Devtools devtool={{}} />);
  });
});
