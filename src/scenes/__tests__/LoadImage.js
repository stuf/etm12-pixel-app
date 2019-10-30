import * as React from 'karet';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import LoadImageScene from 'scenes/LoadImage';

describe('LoadImage', () => {
  it('matches snapshot', () => {
    mount(<LoadImageScene />);
  });
});
