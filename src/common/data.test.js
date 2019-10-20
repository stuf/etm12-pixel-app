import * as D from './data';
import { testEq } from 'test-utils';

it('mkClampedArray', () => {
  const xs = D.mkClampedArray([1, 2, 3, 4, 5, 6, 7, 8]);

  expect(xs).toBeInstanceOf(Uint8ClampedArray);
});

it('mkImageData', () => {
  const w = 5;
  const h = 5;
  const m = 4;
  const xs = D.mkClampedArray(Array(w * h * m).fill(0));

  const ctor = () => D.mkImageData(xs, w, h);
  expect(ctor).not.toThrow();
});

//

testEq([0, 5, 10, 15, 20], () => D.rangeScaled(0, 25, 5));
testEq([10, 20, 30, 40], () => D.rangeScaled(10, 50, 10));
