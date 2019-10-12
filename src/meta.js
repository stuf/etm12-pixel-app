import * as U from 'karet.util';
import * as L from 'partial.lenses';

/**
 * Given a view of `color` from state, return a `LensedAtom` that will always
 * refer to the currently selected color from the current color palette.
 */
export const selectedColorIn = U.view(
  L.choose(x => [
    'palettes',
    x.currentPalette,
    'items',
    x.currentColor,
    L.dropPrefix('#'),
  ]),
);

export const nameIn = U.view('name');

export const isEditingIn = U.view('isEditing');

//

export const wNumber = L.rewrite(n => parseInt(n, 10));
