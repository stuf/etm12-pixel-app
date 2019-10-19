import { testEq } from 'test-utils';
import * as L from 'partial.lenses';

import * as M from './meta';

testEq('foo', () => M.nameIn({ name: 'foo' }));
testEq('bar', () => M.currentIn({ current: 'bar' }));
testEq([123, 456], () => M.offsetIn({ offset: [123, 456] }));
testEq(false, () => M.isEditingIn({ isEditing: false }));
testEq(['top'], () => M.itemsIn({ items: ['top'] }));
testEq([], () => M.itemsIn({ items: [] }));
testEq([], () => M.itemsIn());

testEq(123, () => L.get(M.fmt.rNumber, '123'));
testEq(123, () => L.set(M.fmt.wNumber, '123', undefined));
