import * as React from 'karet';
import { mount } from 'enzyme';

import { takeEvents } from './_shared';

it('creates an Observable property from the given events', done => {
  const dom = document.createElement('div');
  const ev = takeEvents('click', dom);

  ev.take(1).onValue(v => {
    expect(v).toBeInstanceOf(MouseEvent);
    done();
  });

  dom.dispatchEvent(new MouseEvent('click'));
});
