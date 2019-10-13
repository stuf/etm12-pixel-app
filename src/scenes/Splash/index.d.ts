import { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { MaybeObservable } from 'types';

export interface Props extends RouteComponentProps {
  redirectTo: MaybeObservable<string>;
}

export interface Component extends FunctionComponent<Props> {}
