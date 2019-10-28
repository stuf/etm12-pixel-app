import { is } from 'ramda';
import { combine, constant } from 'kefir';
import { saveImageFromCanvas, effValidated, pushEff } from 'core/effects';

jest.mock('file-saver');

describe('effects', () => {
  it('saveImageFromCanvas', () => {
    const canvas = document.createElement('canvas');

    expect(() => {
      saveImageFromCanvas(canvas);
    }).not.toThrow();
  });

  it('effValidated', done => {
    const values = effValidated.take(1);
    const errors = effValidated.takeErrors(1).flatMapErrors(constant);

    combine([values, errors])
      .flatMap(constant)
      .observe({
        value: ([vs, es]) => {
          expect(is(Object, vs)).toBe(true);
          expect(is(Object, es)).toBe(true);
        },
        end: () => {
          done();
        },
      });

    pushEff({ type: 'lul', dorp: 'derp' });
    pushEff({ type: 'some-effect', payload: { some: 'data' } });
  });
});
