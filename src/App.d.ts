import { FunctionComponent } from 'react';
import { Property } from 'kefir';

import { IState } from './core/state.d';
import * as Model from './core/models';

export interface Props {
  state: Property<IState, any>;
  canvasData: Property<number[], any>;
  menuItems: Model.IMenuItem[];
  env: { [key: string]: string };
}

export interface Component extends FunctionComponent<Props> {}
