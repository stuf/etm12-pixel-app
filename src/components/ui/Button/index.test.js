import * as React from 'karet';
import { mount } from 'enzyme';

import Button from './index';

it('renders and behaves correctly', () => {
  const action = jest.fn();

  const wrap = mount(<Button {...{ action }}>123</Button>);

  wrap.find('button').simulate('click');

  expect(action).toHaveBeenCalled();
});

it('renders grouped buttons', () => {
  mount(
    <>
      <Button group>top</Button>
      <Button group>kek</Button>
    </>,
  );
});
