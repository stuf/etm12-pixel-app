import { testEq } from 'test-utils';

import * as H from './util';

testEq('ab', () => H.withSuffix('b', 'a'));
testEq('someunit', () => H.toUnit('unit')('some'));
testEq('100%', () => H.asPercent(100));
testEq('100rem', () => H.asRem(100));
testEq('100px', () => H.asPx(100));
testEq('100vw', () => H.asVw(100));
testEq('100vh', () => H.asVh(100));

testEq(0.125, () => H.reciprocal(8));
