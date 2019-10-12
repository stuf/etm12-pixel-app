import { FunctionComponent } from 'react';

export interface Props {
  size: [number, number];
  scale: number;
}

export interface Component extends FunctionComponent<Props> { }
