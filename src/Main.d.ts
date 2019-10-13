import { FunctionComponent } from 'react';

import { RootProps } from 'types';

export interface Props extends RootProps {}

export interface Component extends FunctionComponent<Props> {}
