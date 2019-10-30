![Codecov](https://img.shields.io/codecov/c/github/stuf/etm12-pixel-app?style=for-the-badge)
![Netlify](https://img.shields.io/netlify/8bfc2ad0-a348-4395-960e-c3331f794428?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/stuf/etm12-pixel-app?style=for-the-badge)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/stuf/etm12-pixel-app?style=for-the-badge)

# `etm12-pixel-app`

## Contents

- [Getting started](#getting-started)
- [Running tests](#running-tests)
- [Building](#building)
- [Code structure](#code-structure)

## Getting started

You'll need Node.js (a fresh version, anything over 8 but 12 is preferred). Yarn is recommended, but not required.

```sh
yarn
yarn start
```

## Running tests

- `yarn test` — Application-wide tests (watch mode)
- `yarn test:simple` — Application-wide tests without watch-mode
- `yarn test:cov` — Test and collect code coverage reports

### Testing libraries

- unit tests through `jest`
- snapshot testing as lightweight regression tests for presentation components
- property-based testing through `jsverify`

## Building

The production bundle can be created by running

```sh
yarn build
```

## Code structure

- Scope-specific code for a module is located inside the directory `_/` located inside that directory
- Tests for a file `module.js` should be in `__tests__/module.js` in the same directory
