import * as R from 'ramda';
import * as K from 'kefir';

import { MaybeObservable } from 'types';

export const toProperty = <T>(
  maybeObs: MaybeObservable<T>,
): K.Property<T, any> => {
  if (maybeObs instanceof K.Property) {
    return maybeObs;
  } else if (maybeObs instanceof K.Observable) {
    return maybeObs.toProperty();
  } else {
    return K.constant(maybeObs);
  }
};
