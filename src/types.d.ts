import { Observable, Property } from 'kefir';
import { IState, ICanvasState } from 'core/state';
import { IMenuItem } from 'core/models';

//

/**
 * Unary function
 */
export interface Ary1Fn<A, R> {
  (a: A): R;
}

/**
 * Curried binary function
 */
export interface Ary2Fn<A, B, R> {
  (a: A): (b: B) => R;
  (a: A, b: B): R;
}

/**
 * Curried ternary function
 */
export interface Ary3Fn<A, B, C, R> {
  (a: A): Ary2Fn<B, C, R>;
  (a: A, b: B): (c: C) => R;
  (a: A, b: B, c: C): R;
}

//

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

//

export type Tuple2<A, B> = [A, B];

//

export type Size = Tuple2<number, number>;

//

export type Value<T> = Property<T, any>;

export type MaybeObservable<T> = T | Observable<T, any>;

//

export interface LiftedAry1Fn<A, R> {
  (a: MaybeObservable<A>): MaybeObservable<R>;
}

export interface LiftedAry2Fn<A, B, R> {
  (a: MaybeObservable<A>, b: MaybeObservable<B>): MaybeObservable<R>;
  (a: MaybeObservable<A>): (b: MaybeObservable<B>) => MaybeObservable<R>;
}
