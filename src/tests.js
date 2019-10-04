/**
 * @module tests
 *
 * Contains some common test utility functions for use in
 * unit tests.
 *
 * Taken from {@link https://github.com/calmm-js/karet.util/blob/master/test/tests.js}
 */
import { Observable, Property, Stream, constant as C } from 'kefir';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

export function show(x) {
  switch (typeof x) {
    case 'string':
    case 'object':
      return JSON.stringify(x);
    default:
      return `${x}`;
  }
}

export const toExpr = f =>
  f
    .toString()
    .replace(/\s+/g, ' ')
    .replace(/^\s*function\s*\(\s*\)\s*{\s*(return\s*)?/, '')
    .replace(/\s*;?\s*}\s*$/, '')
    .replace(/function\s*(\([a-zA-Z]*\))\s*/g, '$1 => ')
    .replace(/{\s*return\s*([^{;]+)\s*;\s*}/g, '$1')
    .replace(/\(([a-zA-Z0-9_]+)\) =>/g, '$1 =>')
    .replace(/\(0, _kefir[^.]*[.]constant\)/g, 'C')
    .replace(/_kefir[^.][.]/g, '')
    .replace('() => ', '');

export const testEq = (expect, thunk) =>
  it(`${toExpr(thunk)} => ${show(expect)}`, done => {
    const actual = thunk();
    const check = actual => {
      const eq = R.equals(actual, expect);
      if (eq instanceof Observable || !eq) {
        done(Error(`Expected: ${show(expect)}, actual: ${show(actual)}`));
      } else {
        done();
      }
    };
    if (actual instanceof Observable) {
      U.thru(actual, U.takeFirst(1), U.on({ value: check, error: check }));
    } else {
      check(actual);
    }
  });

export const testThrows = thunk =>
  it(`${toExpr(thunk)} => throws`, () => {
    try {
      thunk();
    } catch (_) {
      return;
    }
    throw Error('Did not throw as expected.');
  });

export const testRender = (expect, vdomThunk) =>
  it(`${expect}`, () => {
    const actual = ReactDOM.renderToStaticMarkup(vdomThunk());

    if (actual !== expect)
      throw new Error(`Expected: ${show(expect)}, actual: ${show(actual)}`);
  });
