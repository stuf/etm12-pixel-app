import * as K from 'kefir';

import * as H from '../shared';
import * as T from '../test-utils';

const mkDummyEvent = () => ({
  pageX: 234,
  pageY: 234,
  layerX: 0,
  layerY: 0,
  screenX: 123,
  screenY: 123,
});

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
    T.testEq([-6, -5, -4, -3, -2, -1, 0, 1, 2, 18], () =>
      H.difference([1, 2, 3, 4, 5, 6, 7, 8, 9, 25]),
    );
    T.testEq([36, 25, 16, 9, 4, 1, 0, 1, 4, 324], () =>
      H.squaredDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 25]),
    );
    T.testEq(42, () =>
      H.meanSquaredDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 25]),
    );
    T.testEq(6.48074069840786, () => H.stdDev([1, 2, 3, 4, 5, 6, 7, 8, 9, 25]));
  });

  describe('coordinates', () => {
    T.testEq([0, 0], () => H.layerPos(mkDummyEvent()));
    T.testEq([123, 123], () => H.screenPos(mkDummyEvent()));
    T.testEq([234, 234], () => H.pagePos(mkDummyEvent()));
    T.testEq(8, () => H.computeIx([2, 0], 10));
    T.testEq(80, () => H.computeIx([0, 2], 10));
    T.testEq([8, 12], () => H.getIx([2, 0], 10));
    T.testEq([80, 84], () => H.getIx([0, 2], 10));
  });

  T.testEq([255, 0, 0, 255], () => H.fromHex('ff0000'));
  it.todo(
    "H.fromHex('ff0000ff') (support 32 bit color values without JS restrictions)",
  );
  T.testEq([0, 0, 255, 125], () => H.fromHex('0000ff7d'));
});
