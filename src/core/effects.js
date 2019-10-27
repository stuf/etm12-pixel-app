/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module effects
 * @namespace core
 *
 * @todo This needs some thinking about how this should be reasoned around
 */
import * as V from 'kefir.partial.lenses.validation';
import * as U from 'karet.util';
import { saveAs } from 'file-saver';

/**
 * @param {HTMLCanvasElement} canvas
 */
export const saveImageFromCanvas = canvas => {
  canvas.toBlob(b => saveAs(b, 'poopoo.png'));
};

//

export const validateEff = V.errors(
  V.props({
    type: [a => a, 'required'],
    payload: V.optional([a => a, 'required (optional)']),
  }),
);

//

const effBus = U.bus();

//

export const effValue = U.toProperty(effBus);

export const dispatchEff = eff => effBus.push(eff);
