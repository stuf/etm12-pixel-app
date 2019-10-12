import { FunctionComponent } from 'react';
import { Property } from 'kefir';

export interface Props {
  name: Property<string, any>;
  editing: Property<boolean, any>;
}

export interface Component extends FunctionComponent<Props> {}
