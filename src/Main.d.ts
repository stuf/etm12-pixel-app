import { FunctionComponent } from 'react';

export interface Props {
  state: any;
  canvasData: any;
}

export interface Component extends FunctionComponent<Props> { }
