import * as React from 'karet';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import ImageName from 'components/layout/_/ImageName';

it('snapshot test', () => {
  const w = shallow(<ImageName />);
  expect(toJson(w)).toMatchSnapshot('with empty data');
});

it('displays correct element based on isEditing prop', () => {
  const w = shallow(
    <ImageName {...{ isEditing: false, name: 'Untitled 123' }} />,
  );
  expect(w.find('.imageName__nameLabel').text()).toBe('Untitled 123');

  const w2 = render(
    <ImageName {...{ isEditing: true, name: 'Untitled 123' }} />,
  );
  expect(w2.find('.imageName__nameLabel')).toHaveLength(0);
  expect(w2.find('input')).not.toHaveLength(0);
});
