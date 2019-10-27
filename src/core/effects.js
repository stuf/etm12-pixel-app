/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module effects
 * @namespace core
 *
 * @todo This needs some thinking about how this should be reasoned around
 */
import * as V from 'kefir.partial.lenses.validation';
import * as U from 'karet.util';
import * as L from 'kefir.partial.lenses';
import * as K from 'kefir';
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

//

/**
 * @type {K.Stream<Handler, any>}
 */
const handlerBus = U.bus();

export const mkHandler = (type, fn, help) => ({ type, fn, help });

/**
 * @type {K.Property<Object.<string, Handler[]>>}
 */
export const handlers = handlerBus
  .scan(
    (handlers, handler) =>
      L.set(
        [handler.type, L.valueOr([]), L.find(x => x.fn === handler.fn)],
        handler,
        handlers,
      ),
    {},
  )
  .toProperty();

export const registerHandler = handler => {
  handlerBus.push(handler);
};

//

/**
 *
 * @param {K.Property<any, any>} handlerSource
 */
export const handleEffsWith = (handlerSource, effSource) => {
  const effDispatch = K.combine([effSource], [handlerSource]);
};

//

/**
 * @typedef {object} Eff
 * @prop {string} type
 * @prop {any} [payload]
 */

/**
 * @typedef {object} Handler
 * @prop {string} type
 * @prop {Function} fn
 * @prop {string} [help]
 */
