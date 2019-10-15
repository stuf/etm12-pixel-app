import canvasData from './canvas-data';

import { Validate } from 'tests/validators';

describe('canvas-data', () => {
  it('data state has history', () => {
    expect(Validate.history(canvasData.get())).toBeUndefined();
  });

  describe('functions', () => {
    it.todo('clearImage_');
    it.todo('clearImage');
    it.todo('resizeImage_');
    it.todo('resizeImage');
  });

  describe('undo support', () => {
    it.todo('collect history after modifying');
    it.todo('revert to a previous state');
    it.todo('purge history');
  });
});
