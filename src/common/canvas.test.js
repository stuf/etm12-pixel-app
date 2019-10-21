import * as A from './canvas';

import { testEq } from 'test-utils';

const {
  scaleSize,
  getContext,
  drawingEvents,
  getIx,
  getIxRange,
  rgbFromHex,
  fromHexColor,
  empty,
} = A;

const mkMouseDown = () => new MouseEvent('mousedown');
const mkMouseMove = () => new MouseEvent('mousemove');
const mkMouseUp = () => new MouseEvent('mouseup');
const mkMouseOut = () => new MouseEvent('mouseout');

//

describe('<canvas> element', () => {
  describe('scaling', () => {
    it('scaleSize', () => {
      expect(scaleSize([1, 1], 8)).toEqual([8, 8]);
    });
  });

  describe('context', () => {
    it('empty', () => {
      expect(empty([2, 2])).toEqual(Array(16).fill(0));
    });

    it('getContext', () => {
      // CanvasRenderingContext2D
      const dom = document.createElement('canvas');
      const ctx = getContext(dom);

      expect(ctx).toBeInstanceOf(CanvasRenderingContext2D);
    });
  });
  describe('drawingEvents', () => {
    it('mousemove -> mouseup', done => {
      const dom = document.createElement('div');
      const ev = drawingEvents(dom);

      ev.bufferWithCount(2).onValue(xs => {
        expect(xs.map(x => x.type)).toEqual(['mousedown', 'mousemove']);
        done();
      });

      dom.dispatchEvent(mkMouseDown());
      dom.dispatchEvent(mkMouseMove());
      dom.dispatchEvent(mkMouseUp());
    });

    it('mousemove -> mouseout', done => {
      const dom = document.createElement('div');
      const ev = drawingEvents(dom);

      ev.bufferWithCount(2).onValue(xs => {
        expect(xs.map(x => x.type)).toEqual(['mousedown', 'mousemove']);
        done();
      });

      dom.dispatchEvent(mkMouseDown());
      dom.dispatchEvent(mkMouseMove());
      dom.dispatchEvent(mkMouseOut());
    });
  });
});

describe('Coordinate conversion', () => {
  describe('getIx', () => {
    testEq(0, () => getIx([0, 0], 8));
    testEq(8, () => getIx([2, 0], 8));
    testEq(32, () => getIx([0, 1], 8));
  });

  describe('getIxRange', () => {
    testEq([0, 4], () => getIxRange([0, 0], 8));
    testEq([8, 12], () => getIxRange([2, 0], 8));
    testEq([32, 36], () => getIxRange([0, 1], 8));
  });
});

describe('Color conversion', () => {
  testEq([255, 0, 0, 255], () => rgbFromHex('ff0000'));
  testEq([0, 255, 0, 255], () => fromHexColor('00ff00'));
  testEq([0, 255, 0, 125], () => fromHexColor('00ff007d'));
});
