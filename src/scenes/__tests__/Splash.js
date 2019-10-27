import * as React from 'karet';
import * as K from 'kefir';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SplashScene from 'scenes/Splash';

it('renders correctly', () => {
  const wrapper = shallow(<SplashScene />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

it("doesn't trigger redirect if no target is specified", done => {
  const history = {
    replace: jest.fn(),
  };

  const wrapper = mount(<SplashScene history={history} redirectDelay={0} />);

  K.later(50, null).onValue(() => {
    expect(history.replace).not.toHaveBeenCalled();
    done();
  });
});

it('triggers configured redirect', done => {
  const history = {
    replace: jest.fn(),
  };

  const wrapper = mount(
    <SplashScene history={history} redirectTo="/foo" redirectDelay={0} />,
  );

  K.later(50, null).onValue(() => {
    expect(history.replace).toHaveBeenCalled();
    done();
  });
});
