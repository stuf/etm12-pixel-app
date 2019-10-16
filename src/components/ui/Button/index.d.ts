import { FunctionComponent, ReactElement } from 'react';

export interface Props {
  children: ReactElement[];
}

export interface Component extends FunctionComponent<Props> {}
