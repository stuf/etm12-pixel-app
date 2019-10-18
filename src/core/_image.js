/**
 * @module _image
 * @namespace core
 */
export const arrayToCanvas = (xs, w, h) => {
  // Convert the given data into an ImageData instance
  const ys = new Uint8ClampedArray(xs);
  const id = new ImageData(ys, w, h);

  // Create a canvas element, ensure it has the correct size,
  // so that we can work with its rendering context.
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;

  // Get the canvas's rendering context and put the image
  // data into it.
  const ctx = canvas.getContext('2d');
  ctx.putImageData(id, 0, 0);

  return { canvas, ctx };
};
