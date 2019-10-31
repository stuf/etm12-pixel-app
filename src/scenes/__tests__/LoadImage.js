import * as React from 'karet';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import LoadImageScene from 'scenes/LoadImage';

describe('LoadImage', () => {
  it('allow for a workflow', () => {
    const scene = mount(<LoadImageScene />);

    const file = new File(['foo'], 'foo.png', { type: 'image/png' });

    const button = scene.find('#load-image');

    scene.find('input[type="file"]').simulate('change', {
      target: {
        files: [file],
      },
    });
  });
});
