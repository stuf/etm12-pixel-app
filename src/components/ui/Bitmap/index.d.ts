import { FunctionComponent } from 'react';
import { MaybeObservable } from 'types';

export interface Props {
  size: MaybeObservable<[number, number]>;
  scale: MaybeObservable<number>;
  className: string;
  data: MaybeObservable<number[]>;
}

export interface Component extends FunctionComponent<Props> { }
