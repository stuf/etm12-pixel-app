import { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { RootProps } from 'types';

export interface Props extends RouteComponentProps, RootProps { }

export interface Component extends FunctionComponent<Props> { }
