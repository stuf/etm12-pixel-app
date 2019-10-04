import * as H from './shared';
import * as T from './tests';

describe('shared', () => {
  T.testEq([1, 2, 3], () => H.takeAll(1, 2, 3));

  T.testEq(0.125, () => H.reciprocal(8));
  T.testEq(0.125, () => H.reciprocalU(8));
  T.testEq([16, 16], () => H.scaleSize([4, 4], 4));

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
