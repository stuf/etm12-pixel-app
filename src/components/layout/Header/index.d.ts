import { FunctionComponent } from 'react';
import { IMenuItem } from '../../../core/models';

export interface Props {
  menuItems: IMenuItem[];
  name: string;
  isEditing: boolean;
}

export interface Component extends FunctionComponent<Props> {}
