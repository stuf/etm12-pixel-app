import * as A from 'common/canvas';

import { testEq } from 'test-utils';

jest.mock('file-saver');

const {
  scaleSize,
  getContext,
  getImageData,
  drawingEvents,
  getIx,
  getIxRange,
  rgbFromHex,
  fromHexColor,
  empty,
  saveImage,
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

    it('getImageData', () => {
      const [w, h] = [4, 4];
      const dom = document.createElement('canvas');
      dom.width = w;
      dom.height = h;

      const ctx = dom.getContext('2d');
      /** @type {ImageData} */
      const data = getImageData(ctx, w, h);

      expect(data).toBeInstanceOf(ImageData);
      expect(data.width).toBe(w);
      expect(data.height).toBe(h);
      expect(Array.from(data.data)).toEqual(Array(w * h * 4).fill(0));
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

  describe('File operations', () => {
    it('saveImage', () => {
      expect(() => {
        saveImage([0, 0, 0, 0], [1, 1], 'foo');
      }).not.toThrow();

      expect(() => {
        saveImage(['a'], [1, 1], 'foo');
      }).toThrow();
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
