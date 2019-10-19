import { FunctionComponent, ReactElement } from 'react';
import { MaybeObservable, Ary1Fn } from 'types';

export interface Props {
  children: ReactElement[];
  disabled: MaybeObservable<boolean>;
  action: Ary1Fn<Event, void>;
}

export interface Component extends FunctionComponent<Props> {}
