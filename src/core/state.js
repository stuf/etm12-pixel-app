/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
/**
 * @module state
 * @namespace core
 */
import * as U from 'karet.util';

import palettes from './palettes';

import * as S from 'settings';
import * as T from './state.d';

/**
 * @type {T.IState}
 */
const initialState = {
  canvas: {
    size: [32, 32],
    scale: 16,
  },
  currentFile: {
    name: 'Untitled',
    createdAt: new Date(),
    isEditing: false,
  },
  color: {
    currentColor: 0,
    currentPalette: 0,
    palettes,
  },
  app: {
    devMode: S.app.devMode,
  },
  devtool: {
    flags: {
      offsetGuide: true,
      showBuildInfo: true,
    },
  },
};

const state = U.atom(initialState);

export default state;
