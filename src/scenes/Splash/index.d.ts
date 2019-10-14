import { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { RootProps, MaybeObservable } from 'types';

export interface Props extends RouteComponentProps, RootProps {
  redirectTo: MaybeObservable<string>;
  redirectDelay: MaybeObservable<number>;
}

export interface Component extends FunctionComponent<Props> { }
