import { saveImageFromCanvas } from 'core/effects';

jest.mock('file-saver');

describe('effects', () => {
  it('saveImageFromCanvas', () => {
    const canvas = document.createElement('canvas');

    expect(() => {
      saveImageFromCanvas(canvas);
    }).not.toThrow();
  });
});
