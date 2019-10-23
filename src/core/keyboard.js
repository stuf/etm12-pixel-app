/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as K from 'kefir';

import { takeEvents } from 'common/events';

/**
 * @type {K.Property<KeyboardEvent, any>}
 */
export const onKeyDown = src => takeEvents('keydown', src);

/**
 * @type {K.Property<KeyboardEvent, any>}
 */
export const onKeyUp = src => takeEvents('keyup', src);
