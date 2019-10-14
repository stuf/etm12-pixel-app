import { ReactElement, FunctionComponent } from 'react';

export interface Props {
  title: string;
  children: ReactElement[];
  open: boolean;
}

export interface Component extends FunctionComponent<Props> { }
