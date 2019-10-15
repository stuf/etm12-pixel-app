import { nullable, props, and, getErrors, Rule } from 'validation-rules';

import * as S from 'settings';

//

const validate = (rules, actual) =>
  expect(getErrors(rules, actual)).toBeUndefined();

//

it('has correct history configuration', () => {
  validate(
    props({
      maxCount: nullable(and(Rule.REQUIRED, Rule.NUMBER)),
      pushEquals: nullable(Rule.BOOLEAN),
      replacePeriod: nullable(and(Rule.REQUIRED, Rule.NUMBER)),
    }),
    S.history,
  );
});

it('has correct canvas configuration', () => {
  validate(
    props({
      colorChannels: and(Rule.REQUIRED, Rule.NUMBER),
    }),
    S.canvas,
  );
});
