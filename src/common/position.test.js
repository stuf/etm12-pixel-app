import { testEq } from 'test-utils';
import * as P from './position';

let el;
let bbox;

beforeEach(() => {
  el = document.createElement('div');
  bbox = [[10, 10], [100, 100]];
});

testEq([0, 0], () => P.elementOffsetFor(el));
testEq([[0, 0], [0, 0]], () => P.elementBoundingBoxFor(el));

testEq(false, () => P.insideBoundingBox(bbox, [9, 9]));
testEq(true, () => P.insideBoundingBox(bbox, [10, 10]));
testEq(true, () => P.insideBoundingBox(bbox, [11, 11]));
testEq(true, () => P.insideBoundingBox(bbox, [99, 99]));
testEq(true, () => P.insideBoundingBox(bbox, [100, 100]));
testEq(false, () => P.insideBoundingBox(bbox, [101, 101]));
