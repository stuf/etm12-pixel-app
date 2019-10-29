/**
 * @module meta
 * @namespace common
 */
import * as U from 'karet.util';
import * as L from 'kefir.partial.lenses';

//

const toInt = n => parseInt(n, 10);

//

export const nameIn = U.view('name');

export const itemsIn = U.view(['items', L.valueOr([])]);

export const currentIn = U.view('current');

export const offsetIn = U.view('offset');

export const isEditingIn = U.view('isEditing');

//

export const fstIn = U.view(0);

export const sndIn = U.view(1);

//

export const fmt = {
  rNumber: L.reread(toInt),
  wNumber: L.rewrite(toInt),
};

//

export const buildEnvIn = U.view([
  'env',
  L.pick({
    env: 'REACT_APP_BUILD_ENV',
    version: 'REACT_APP_BUILD_VERSION',
    branch: 'REACT_APP_BUILD_BRANCH',
    commit: 'REACT_APP_BUILD_COMMIT',
  }),
]);
