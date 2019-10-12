/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as K from 'kefir';

import { takeEvents } from './_shared';

/**
 * @type {K.Property<KeyboardEvent, any>}
 */
export const onKeyDown = takeEvents('keydown', document);

/**
 * @type {K.Property<KeyboardEvent, any>}
 */
export const onKeyUp = takeEvents('keyup', document);
