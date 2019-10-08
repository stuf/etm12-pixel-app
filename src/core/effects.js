/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module effects
 * @namespace core
 */
import * as R from 'ramda';
import { saveAs } from 'file-saver';

const mkElem = document.createElement.bind(document);

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
export const saveImageFromCanvas = canvas => {
  canvas.toBlob(b => saveAs(b, 'poopoo.png'));
};
