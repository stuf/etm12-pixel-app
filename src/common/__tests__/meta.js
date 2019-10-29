import { testEq } from 'test-utils';
import * as L from 'partial.lenses';

import * as M from 'common/meta';

testEq('foo', () => M.nameIn({ name: 'foo' }));
testEq('bar', () => M.currentIn({ current: 'bar' }));
testEq([123, 456], () => M.offsetIn({ offset: [123, 456] }));
testEq(false, () => M.isEditingIn({ isEditing: false }));
testEq(['top'], () => M.itemsIn({ items: ['top'] }));
testEq([], () => M.itemsIn({ items: [] }));
testEq([], () => M.itemsIn());

testEq(1, () => M.fstIn([1, 2]));
testEq(2, () => M.sndIn([1, 2]));

testEq(123, () => L.get(M.fmt.rNumber, '123'));
testEq(123, () => L.set(M.fmt.wNumber, '123', undefined));

testEq({ env: 1, version: 2, commit: 3, branch: 4 }, () =>
  M.buildEnvIn({
    env: {
      REACT_APP_BUILD_ENV: 1,
      REACT_APP_BUILD_VERSION: 2,
      REACT_APP_BUILD_COMMIT: 3,
      REACT_APP_BUILD_BRANCH: 4,
    },
  }),
);
