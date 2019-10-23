import * as React from 'karet';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import BuildInfo from 'components/layout/_/BuildInfo';

const getEnv = () => ({
  REACT_APP_BUILD_VERSION: '1',
  REACT_APP_BUILD_COMMIT: '2',
  REACT_APP_BUILD_ENV: '3',
  REACT_APP_BUILD_BRANCH: '4',
});

it('renders correctly', () => {
  const wrapper = shallow(<BuildInfo />);
  const wrapper2 = shallow(<BuildInfo env={getEnv()} />);

  expect(toJson(wrapper)).toMatchSnapshot('without env');
  expect(toJson(wrapper2)).toMatchSnapshot('with env');
});
