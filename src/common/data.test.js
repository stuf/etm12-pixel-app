import * as Mod from './data';

it('mkClampedArray', () => {
  const xs = Mod.mkClampedArray([1, 2, 3, 4, 5, 6, 7, 8]);

  expect(xs).toBeInstanceOf(Uint8ClampedArray);
});

it('mkImageData', () => {
  const w = 5;
  const h = 5;
  const m = 4;
  const xs = Mod.mkClampedArray(Array(w * h * m).fill(0));

  const ctor = () => Mod.mkImageData(xs, w, h);
  expect(ctor).not.toThrow();
});
