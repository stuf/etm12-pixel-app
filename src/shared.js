import * as U from 'karet.util';
import * as R from 'ramda';
import * as I from 'infestines';
import * as K from 'kefir';

const setName = process.env.NODE_ENV === 'production' ? a => a : I.defineNameU;

const Pos = {
  SCREEN: ['screenX', 'screenY'],
  LAYER: ['layerX', 'layerY'],
};

//

export const reciprocal = n => Math.pow(n, -1);

/**
 * @type {(size: MaybeObservable<[number, number]>, scale: MaybeObservable<number>) => K.Observable<[number, number]>}
 */
export const scaleSize = U.lift(([w, h], m) => [w * m, h * m]);

/**
 * @type {(x: (K.Observable<MouseEvent, any> | MouseEvent)) => K.Observable<[number, number]>}
 */
export const layerPos = U.mapValue(R.props(Pos.LAYER));

//

/**
 * @type {(el: K.Property<HTMLCanvasElement, any> | HTMLCanvasElement) => K.Property<CanvasRenderingContext2D, any>}
 */
export const getContext = U.lift(el => el.getContext('2d'));

//

/**
 * @template T
 * @typedef {K.Observable<T, any> | T} MaybeObservable
 */
