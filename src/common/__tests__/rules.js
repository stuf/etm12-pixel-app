import * as R from 'ramda';
import * as J from 'jsverify';
import * as V from 'kefir.partial.lenses.validation';

import { required, number, string, array } from 'common/rules';

describe('common/rules', () => {
  J.property('required', J.string, x => {
    const r = V.errors(required, x);
    // console.log({ r, x });
    return !r;
  });
  J.property('number', J.nat, n => !V.errors(number, n));
  J.property('string', J.string, x => !V.errors(string, x));
  J.property('array', J.array(J.nat), xs => !V.errors(array, xs));
});
