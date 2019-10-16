/**
 * @module data
 * @namespace common
 *
 * Common curried data structure constructors
 */
import * as R from 'ramda';

export const mkClampedArray = R.constructN(1, Uint8ClampedArray);

export const mkImageData = R.constructN(3, ImageData);
