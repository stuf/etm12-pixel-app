import * as A from './canvas';

import { testEq } from 'test-utils';

const {
  scaleSize,
  getContext,
  getIx,
  getIxRange,
  rgbFromHex,
  fromHexColor,
  empty,
} = A;

testEq([8, 8], () => scaleSize([1, 1], 8));

it.todo('getContext ~> CanvasRenderingContext2D');
it.todo('drawingEvents -> Observable(MouseEvent)');

testEq(0, () => getIx([0, 0], 8));
testEq(8, () => getIx([2, 0], 8));
testEq(32, () => getIx([0, 1], 8));

testEq([0, 4], () => getIxRange([0, 0], 8));
testEq([8, 12], () => getIxRange([2, 0], 8));
testEq([32, 36], () => getIxRange([0, 1], 8));

testEq([255, 0, 0, 255], () => rgbFromHex('ff0000'));
testEq([0, 255, 0, 125], () => fromHexColor('00ff007d'));

testEq(Array(16).fill(0), () => empty([2, 2]));
