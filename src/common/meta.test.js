import { testEq } from 'test-utils';

import * as M from './meta';

testEq('foo', () => M.nameIn({ name: 'foo' }));
testEq('bar', () => M.currentIn({ current: 'bar' }));
testEq(['top'], () => M.itemsIn({ items: ['top'] }));
testEq([], () => M.itemsIn({ items: [] }));
testEq([], () => M.itemsIn());
