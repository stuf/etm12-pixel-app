import * as A from 'kefir.atom';
import * as K from 'kefir';

import * as D from 'common/data';
import { testEq } from 'test-utils';

// Guards

describe('Type guards', () => {
  it('isAbstractMutable(x) -> Bool', () => {
    expect(D.isAbstractMutable(A.atom(123))).toBe(true);
    expect(D.isAbstractMutable(123)).toBe(false);
  });

  it('isObservable(x) -> Bool', () => {
    const trues = [
      K.constant(123),
      A.atom(123),
      K.constant(123).changes(),
      K.never(),
    ];

    trues.forEach(obs => expect(D.isObservable(obs)).toBe(true));
  });
});

//

describe('Data constructors', () => {
  it('mkClampedArray xs -> Uint8ClampedArray', () => {
    const xs = D.mkClampedArray([1, 2, 3, 4, 5, 6, 7, 8]);

    expect(xs).toBeInstanceOf(Uint8ClampedArray);
  });

  it('mkImageData xs Int Int -> ImageData', () => {
    const w = 5;
    const h = 5;
    const m = 4;
    const xs = D.mkClampedArray(Array(w * h * m).fill(0));

    const ctor = () => D.mkImageData(xs, w, h);
    expect(ctor).not.toThrow();
  });
});

//

describe('Data utilities', () => {
  describe('rangeScaled', () => {
    testEq([0, 5, 10, 15, 20], () => D.rangeScaled(0, 25, 5));
    testEq([10, 20, 30, 40], () => D.rangeScaled(10, 50, 10));
  });
});
