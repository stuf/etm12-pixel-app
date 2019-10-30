import * as J from 'jsverify';
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
  empty,
  saveImage,
  convertFromHexColor,
} = A;

const mkMouseDown = () => new MouseEvent('mousedown');
const mkMouseMove = () => new MouseEvent('mousemove');
const mkMouseUp = () => new MouseEvent('mouseup');
const mkMouseOut = () => new MouseEvent('mouseout');

//

const arbCoord = J.tuple([J.nat, J.nat]);
const arbSize = J.tuple([J.nat, J.nat]);

describe('<canvas> element', () => {
  describe('scaling', () => {
    J.property(
      'scaleSize (a, b) * m = (am, bm)',
      arbSize,
      J.nat,
      ([a, b], m) => {
        const [da, db] = scaleSize([a, b], m);
        return da === a * m && db === b * m;
      },
    );
  });

  describe('context', () => {
    it('empty', () => {
      expect(empty([2, 2])).toEqual(Array(16).fill(0));
    });

    it('getContext', () => {
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
  testEq([255, 0, 0, 255], () => convertFromHexColor('ff0000'));
  testEq([255, 0, 0, 125], () => convertFromHexColor('ff00007d'));
});
