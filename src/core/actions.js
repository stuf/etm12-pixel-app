import { taggedSum } from 'daggy';

const actionCtors = {
  Foo: [],
};

/**
 * @type {{ [k: keyof actionCtors]: any}}
 */
const Action = taggedSum('Action', actionCtors);
