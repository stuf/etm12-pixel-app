import { FunctionComponent } from 'react';
import { BuildCommitEnv } from 'types';

export interface Props {
  env: BuildCommitEnv;
}

export interface Component extends FunctionComponent<Props> { }
