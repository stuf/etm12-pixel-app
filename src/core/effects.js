/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module effects
 * @namespace core
 *
 * @todo This needs some thinking about how this should be reasoned around
 */
import * as K from 'kefir';
import * as R from 'kefir.ramda';
import * as U from 'karet.util';
import * as V from 'kefir.partial.lenses.validation';

import { saveAs } from 'file-saver';

// Legacy

/**
 * @param {HTMLCanvasElement} canvas
 */
export const saveImageFromCanvas = canvas => {
  canvas.toBlob(b => saveAs(b, 'poopoo.png'));
};

// Validation

const ruleEff = V.propsOr(V.rejectAs('unexpected field'), {
  type: [R.is(String), 'required string'],
  payload: V.optional(V.accept),
});

// Effect bus

const effBus = U.bus();

const effValue = U.toProperty(effBus);

export const effValidated = U.flatMapLatest(eff => {
  const errors = V.errors(ruleEff, eff);

  if (errors) {
    return K.constantError(errors);
  }

  return K.constant(eff);
}, effValue);

export const pushEff = effBus.push.bind(effBus);

//

const handleEffs = U.thru(effValidated);
