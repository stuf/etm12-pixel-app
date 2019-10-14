import { FunctionComponent } from 'react';

import { IMenuItem } from 'core/models';
import { BuildCommitEnv } from 'types';

export interface Props {
  menuItems: IMenuItem[];
  name: string;
  className: string;
  isEditing: boolean;
  env: BuildCommitEnv;
}

export interface Component extends FunctionComponent<Props> { }
