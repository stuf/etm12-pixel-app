import { taggedSum } from 'daggy';
import * as T from './effects.d';

const actionCtors = {
  RegisterContext: ['ctx'],
  SaveImage: [],
  LoadImage: [],
};

/**
 * @type {{ [k: keyof actionCtors]: any}}
 */
const Action = taggedSum('Action', actionCtors);
