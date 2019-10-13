import * as R from 'ramda';
import * as V from 'partial.lenses.validation';

import * as S from 'settings';

const isNonEmpty = R.identity;
const isNumber = R.is(Number);
const isBool = R.is(Boolean);
const isDefined = R.isNil;

//

const Rule = {
  DEFINED: [isDefined, 'required'],
  REQUIRED: [isNonEmpty, 'required'],
  NUMBER: [isNumber, 'non-number'],
  BOOLEAN: [isBool, 'non-boolean'],
};

//

const validate = (rules, actual) =>
  expect(V.errors(rules, actual)).toBeUndefined();

//

it('has correct history configuration', () => {
  validate(
    V.props({
      maxCount: V.optional(V.and(Rule.REQUIRED, Rule.NUMBER)),
      pushEquals: V.optional(Rule.BOOLEAN),
      replacePeriod: V.optional(V.and(Rule.REQUIRED, Rule.NUMBER)),
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
