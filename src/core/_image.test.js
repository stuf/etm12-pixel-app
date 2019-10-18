import { arrayToCanvas } from './_image';

it('creates a canvas with the given image', () => {
  const data = [0, 0, 0, 0];
  const r = arrayToCanvas(data, 1, 1);
  const ps = r.ctx.getImageData(0, 0, 1, 1);

  expect(Array.from(ps.data)).toEqual(data);
});
