import * as K from 'kefir';

import * as H from './shared';
import * as T from './tests';

describe('shared', () => {
  T.testEq([1, 2, 3], () => H.takeAll(1, 2, 3));

  describe('observable', () => {
    it('toProperty(x) -> Property(x)', () => {
      expect(H.toProperty(123)).toBeInstanceOf(K.Property);
    });

    it('toProperty(Stream(x)) -> Property(x)', () => {
      expect(H.toProperty(K.constant(123).changes())).toBeInstanceOf(
        K.Property,
      );
    });

    it('toProperty(Property(x)) -> Property(x)', () => {
      expect(H.toProperty(K.constant(123))).toBeInstanceOf(K.Property);
    });
  });

  describe('arithmetic', () => {
    T.testEq(0.125, () => H.reciprocal(8));
    T.testEq(0.125, () => H.reciprocalU(8));
    T.testEq([16, 16], () => H.scaleSize([4, 4], 4));
    T.testEq((1 + 101 + 200) / 3, () => H.mean([1, 101, 200]));
    // T.testEq((1 + 101 + 200) / 3, () => H.difference([1, 101, 200]));
    it.todo('difference');
    it.todo('squaredDifference');
    it.todo('meanSquaredDifference');
    T.testEq(6.48074069840786, () => H.stdDev([1, 2, 3, 4, 5, 6, 7, 8, 9, 25]));
  });

  it.todo('layerPos');
  it.todo('screenPos');
  it.todo('pagePos');

  T.testEq([255, 0, 0, 255], () => H.fromHex('ff0000'));

  it.todo('getContext');

  T.testEq('a', () => H.fstOf(['a', 'b']));
  T.testEq('b', () => H.sndOf(['a', 'b']));

  it.todo('rangeScaled');
  it.todo('yiqFor');
});
