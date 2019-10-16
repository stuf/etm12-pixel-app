import { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface Props extends RouteComponentProps {}

export interface Component extends FunctionComponent<Props> {}
