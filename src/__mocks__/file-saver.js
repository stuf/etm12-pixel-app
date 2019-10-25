'use strict';

// const fileSaver = require('file-saver');

jest.genMockFromModule('file-saver');

export const saveAs = () => {
  console.log('lul');
};
