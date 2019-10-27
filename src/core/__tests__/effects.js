import * as K from 'kefir';
import {
  saveImageFromCanvas,
  handlers,
  mkHandler,
  effValue,
  dispatchEff,
  registerHandler,
} from 'core/effects';
import { Property } from 'kefir';

jest.mock('file-saver');

describe('effects', () => {
  it('saveImageFromCanvas', () => {
    const canvas = document.createElement('canvas');

    expect(() => {
      saveImageFromCanvas(canvas);
    }).not.toThrow();
  });

  it('effValue', () => {
    expect(effValue).toBeInstanceOf(Property);
  });

  it('dispatchEff', done => {
    effValue.take(1).onValue(eff => {
      expect(eff).toEqual({ type: 'foo' });
      done();
    });

    dispatchEff({ type: 'foo' });
  });

  it('allows registering effects handlers', done => {
    handlers
      .skip(4)
      .take(1)
      .onValue(v => {
        expect(v).toMatchObject({
          something: [{}, {}],
          'something-else': [{}],
        });
        done();
      });

    const h1 = mkHandler('something', a => a);
    const h2 = mkHandler('something-else', b => b);
    const h1b = mkHandler('something', a => a);

    registerHandler(h1);
    registerHandler(h2);
    registerHandler(h1);
    registerHandler(h1b);
    registerHandler(h1);
  });
});
