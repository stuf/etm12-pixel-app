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
# Install all dependencies
yarn
```

```sh
# Run app
yarn start
```

### Git hooks

This repository uses [husky](https://github.com/typicode/husky) for Git hooks. _All tests must pass to be allowed pushing to remote_.

### Committing code

This repository uses [Git commitizen](https://github.com/commitizen) for creating commit messages in the repository. After installing dependencies, commitizen should also be configured in the project. Use `git cz` instead of `git commit` for commits.

### Project scripts

- `yarn start`
  - start application locally with some additional development environment-related additions
- `yarn start:app`
  - same as `yarn start`, but skip devenv-related additions
- `yarn build`
  - create production bundle; _`yarn prebuild` must succeed_
- `yarn build:changelog`
  - generate [CHANGELOG.md](./CHANGELOG.md) file based committed code changes
- `yarn prebuild`
  - run tests and collect code coverage before creating the application bundle
- `yarn test`
  - run tests in watch mode
- `yarn test:simple`
  - run tests without watch mode
- `yarn test:cov`
  - run tests without watch mode, collect code coverage reports

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
