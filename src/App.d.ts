import { Property } from 'kefir';

import { IState } from './core/state.d';

export interface Props {
  state: Property<IState, any>;
  canvasData: Property<number[], any>;
}
