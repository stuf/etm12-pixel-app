/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module effects
 * @namespace core
 */
import { saveAs } from 'file-saver';

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
export const saveImageFromCanvas = canvas => {
  canvas.toBlob(b => saveAs(b, 'poopoo.png'));
};
