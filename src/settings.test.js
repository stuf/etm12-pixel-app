import * as R from 'ramda';
import * as V from 'partial.lenses.validation';

import * as S from './settings';

const isNonEmpty = R.identity;
const isNumber = R.is(Number);

//

const Rule = {
  REQUIRED: [isNonEmpty, 'required'],
  NUMBER: [isNumber, 'non-number'],
};

//

const validate = (rules, actual) =>
  expect(V.errors(rules, actual)).not.toBeDefined();

//

it('has correct history configuration', () => {
  validate(
    V.props({
      maxCount: V.and(Rule.REQUIRED, Rule.NUMBER),
      replacePeriod: V.and(Rule.REQUIRED, Rule.NUMBER),
    }),
    S.history,
  );
});

it('has correct canvas configuration', () => {
  validate(
    V.props({
      colorChannels: V.and(Rule.REQUIRED, Rule.NUMBER),
    }),
    S.canvas,
  );
});
