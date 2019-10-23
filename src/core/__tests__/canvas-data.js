import canvasData from 'core/canvas-data';

import { Validate } from 'tests/validators';

describe('canvas-data', () => {
  it('data state has history', () => {
    expect(Validate.history(canvasData.get())).toBeUndefined();
  });
});
