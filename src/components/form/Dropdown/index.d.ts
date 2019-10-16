import { FunctionComponent } from 'react';
import { Value } from 'types';
import { IPalette } from 'core/models';

export interface Props {
  items: IPalette[];
  value: Value<number>;
}

export interface Component extends FunctionComponent<Props> {}
