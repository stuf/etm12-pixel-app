import * as R from 'ramda';
import * as V from 'partial.lenses.validation';

import * as S from './settings';

const isNonEmpty = R.identity;
const isNumber = R.is(Number);
const isBool = R.is(Boolean);

//

const Rule = {
  REQUIRED: [isNonEmpty, 'required'],
  NUMBER: [isNumber, 'non-number'],
  BOOLEAN: [isBool, 'non-boolean'],
};

//

const validate = (rules, actual) =>
  expect(V.errors(rules, actual)).not.toBeDefined();

//

it('has correct history configuration', () => {
  validate(
    V.props({
      maxCount: V.and(Rule.REQUIRED, Rule.NUMBER),
      pushEquals: V.and(Rule.REQUIRED, Rule.BOOLEAN),
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
