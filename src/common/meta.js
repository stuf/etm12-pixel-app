/**
 * @module meta
 * @namespace common
 */
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

//

const toInt = n => parseInt(n, 10);

//

export const nameIn = U.view('name');

export const itemsIn = U.view('items');

export const currentIn = U.view('current');

//

export const fmt = {
  rNumber: L.reread(toInt),
  wNumber: L.rewrite(toInt),
};
