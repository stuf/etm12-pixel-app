import * as A from './canvas';

import { testEq } from 'test-utils';

const { scaleSize } = A;

testEq([8, 8], () => scaleSize([1, 1], 8));
