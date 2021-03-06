import * as React from 'karet';
import { shallow } from 'enzyme';

import Palette from 'components/ui/Palette';

it('renders without crashing', () => {
  shallow(<Palette items={[]} />);

  shallow(<Palette items={['#f00', '#00f']} currentColor={0} />);
});
