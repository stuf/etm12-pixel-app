import { FunctionComponent } from 'react';
import { MaybeObservable } from 'types';
import { Mutable } from 'typedef';

export interface Props {
  size: MaybeObservable<[number, number]>;
  scale: MaybeObservable<number>;
  className: string;
  data: MaybeObservable<number[]>;
  domRef: Mutable<HTMLCanvasElement>;
}

export interface Component extends FunctionComponent<Props> { }
