import { elementOffsetFor } from './position';

it('elementOffsetFor', () => {
  expect(elementOffsetFor(document.createElement('div'))).toEqual([0, 0]);
});
