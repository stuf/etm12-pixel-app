import { Observable, Property } from 'kefir';
import { IState, ICanvasState } from 'core/state';
import { IMenuItem } from 'core/models';

export interface BuildCommitEnv {
  REACT_APP_BUILD_BRANCH: string;
  REACT_APP_BUILD_COMMIT: string;
  REACT_APP_BUILD_ENV: string;
  REACT_APP_BUILD_VERSION: string;
}

export interface RootProps {
  state: IState;
  canvasData: ICanvasState;
  menuItems: IMenuItem[];
  env: BuildCommitEnv & { [key: string]: string };
}

export type Value<T> = Property<T, any>;

export type MaybeObservable<T> = T | Observable<T, any>;
