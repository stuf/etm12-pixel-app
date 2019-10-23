import * as React from 'karet';
import { constant as C } from 'kefir';
import { shallow } from 'enzyme';

import Cursor from 'components/core/_/Cursor';

it('renders correctly', () => {
  shallow(<Cursor pos={[1, 1]} scale={8} />);
  shallow(<Cursor pos={[1, 4]} scale={C(8)} />);
});
