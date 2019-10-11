import { takeEvents } from './_shared';

export const onKeyDown = takeEvents('keydown', document);
export const onKeyUp = takeEvents('keyup', document);
