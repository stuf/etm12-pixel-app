import { testEq } from 'test-utils';
import * as P from 'common/position';

let el;
let bbox;

beforeEach(() => {
  el = document.createElement('div');
  bbox = [[10, 10], [100, 100]];
});

describe('elementOffsetFor', () => {
  testEq([0, 0], () => P.elementOffsetFor(el));
});

describe('elementBoundingBoxFor', () => {
  testEq([[0, 0], [0, 0]], () => P.elementBoundingBoxFor(el));
});

describe('insideBoundingBox', () => {
  testEq(false, () => P.insideBoundingBox(bbox, [9, 9]));
  testEq(true, () => P.insideBoundingBox(bbox, [10, 10]));
  testEq(true, () => P.insideBoundingBox(bbox, [11, 11]));
  testEq(true, () => P.insideBoundingBox(bbox, [99, 99]));
  testEq(true, () => P.insideBoundingBox(bbox, [100, 100]));
  testEq(false, () => P.insideBoundingBox(bbox, [101, 101]));
});

describe('offsetPositionWith', () => {
  testEq([100, 100], () => P.offsetPositionWith([100, 100], [200, 200]));
});

describe('scalePositionWith', () => {
  testEq([8, 8], () => P.scalePositionWith(8, [1, 1]));
});

describe('truncPosition', () => {
  testEq([2, 3], () => P.truncPosition([2.5, 3.5]));
});

describe('roundPosition', () => {
  testEq([3, 3], () => P.roundPosition([2.5, 3.4]));
});
