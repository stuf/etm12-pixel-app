import * as A from 'kefir.atom';
import * as V from 'partial.lenses.validation';

import { props, and, Rule, nullable, getErrors } from 'validation-rules';
import state from 'core/state';

const validate = (rules, actual) =>
  expect(getErrors(rules, actual)).toBeUndefined();

it('has mutable observable state', () => {
  expect(state).toBeInstanceOf(A.AbstractMutable);
  expect(state).toBeInstanceOf(A.Atom);
});

it('contains valid state', () => {
  validate(
    props({
      canvas: and(
        Rule.IS_OBJECT,
        props({
          size: Rule.REQUIRED,
          scale: Rule.REQUIRED,
        }),
      ),
      color: nullable(Rule.IS_OBJECT),
      currentFile: nullable(Rule.IS_OBJECT),
      tool: nullable(Rule.IS_OBJECT),
      app: nullable(Rule.IS_OBJECT),
      devtool: nullable(Rule.IS_OBJECT),
    }),
    state.get(),
  );
});
