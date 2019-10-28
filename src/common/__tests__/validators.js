import * as J from 'jsverify';

import * as V from 'common/validators';

describe('validators', () => {
  J.property('isString', J.string, V.isString);
  J.property('isNumber', J.nat, V.isNumber);
  J.property('isArray', J.array(J.string), V.isArray);
});
