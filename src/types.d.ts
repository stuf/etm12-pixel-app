import { Observable, Property } from 'kefir';
import { IState, ICanvasState } from 'core/state';
import { IMenuItem } from 'core/models';

export interface RootProps {
  state: IState;
  canvasData: ICanvasState;
  menuItems: IMenuItem[];
  env: { [key: string]: string };
}

export type Value<T> = Property<T, any>;

export type MaybeObservable<T> = T | Observable<T, any>;
