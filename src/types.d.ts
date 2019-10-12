import { Observable, Property } from 'kefir';

export type Value<T> = Property<T, any>;

export type MaybeObservable<T> = T | Observable<T, any>;
