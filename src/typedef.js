import { Tuple } from 'ts-toolbelt';
import * as K from 'kefir';

/**
 * @global
 * @template T
 * @typedef {K.Property<T, any> | T} MaybeObservable
 */

/**
 * @global
 * @template T
 * @typedef {K.Property<T, any> & { get: Function, set: Function }} Mutable
 */

/**
 * @global
 * @template T
 * @typedef {Tuple<[T, T]>} Tuple2
 */

/**
 * @global
 * @template T
 * @typedef {Tuple<[T, T, T]>} Tuple3
 */

/**
 * @global
 * @template T
 * @typedef {Tuple<[T, T, T, T]>} Tuple4
 */
