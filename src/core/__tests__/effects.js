import { saveImageFromCanvas, effValue, dispatchEff } from 'core/effects';
import { Property } from 'kefir';

import { testEq } from 'test-utils';

jest.mock('file-saver');

describe('effects', () => {
  it('saveImageFromCanvas', () => {
    const canvas = document.createElement('canvas');

    expect(() => {
      saveImageFromCanvas(canvas);
    }).not.toThrow();
  });

  it('effValue :: Property', () => {
    expect(effValue).toBeInstanceOf(Property);
  });
});
