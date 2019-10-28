import * as React from 'karet';
import * as U from 'karet.util';
import * as H from 'kefir.partial.lenses.history';
import { mount } from 'enzyme';

import {
  TimeControlButton,
  HistoryControls,
  ClearHistoryButton,
} from 'components/core/History';

let state;
let undoCount;
let redoCount;
let presentState;

beforeEach(() => {
  state = U.atom(H.init({}, 'value'));
  undoCount = U.view(H.undoIndex, state);
  redoCount = U.view(H.redoIndex, state);
  presentState = U.view(H.present, state);
});

describe('components/core/History', () => {
  describe('TimeControlButton', () => {
    it('renders error placeholder if invalid history direction', () => {
      const wrapper = mount(<TimeControlButton>foo</TimeControlButton>);
    });

    it('controls time', () => {
      presentState.set('some value');
      presentState.set('some other value');

      const wrapper = mount(
        <TimeControlButton history={state} direction="undo">
          thing
        </TimeControlButton>,
      );

      expect(undoCount.get()).toBe(2);

      wrapper.simulate('click');

      expect(undoCount.get()).toBe(1);
    });
  });

  describe('ClearHistoryButton', () => {
    it('controls time', done => {
      const wrapper = mount(
        <ClearHistoryButton history={state}>clear it all</ClearHistoryButton>,
      );

      undoCount
        .bufferWithCount(4)
        .take(1)
        .onValue(xs => {
          expect(xs).toEqual([0, 1, 2, 0]);
          done();
        });

      presentState.set('one');
      presentState.set('two');

      wrapper.simulate('click');
    });
  });
});
