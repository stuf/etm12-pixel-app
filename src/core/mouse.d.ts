import { Observable, Property } from 'kefir';

export type MaybeObservable<T> = T | Observable<T, any>;

export interface Ev {}
