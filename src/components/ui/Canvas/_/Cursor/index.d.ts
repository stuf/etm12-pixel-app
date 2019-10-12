import { FunctionComponent } from 'react';
import { Observable } from 'kefir';

export interface Props {
  pos: Observable<[number, number], any>;
  scale: Observable<number, any>;
}

export interface Component extends FunctionComponent<Props> { }
