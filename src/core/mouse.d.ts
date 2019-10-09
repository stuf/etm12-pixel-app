import { Observable } from 'kefir';

export type MaybeObservable<T> = T | Observable<T, any>;

export interface Ev { }
