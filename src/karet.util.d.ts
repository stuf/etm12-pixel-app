interface Ary1Fn<T0, R> {
  (a0: T0): R;
}

interface Ary2Fn<T0, T1, R> {
  (a0: T0, a1: T1): R;
}

interface CurriedAry2<T0, T1, R> {
  (a0: T0, a1: T1): R;
  (a0: T0): (a1: T1) => R;
}

declare module 'karet.util' {
  function thru<T, R>(x: T, f0: Ary1Fn<T, R>): T;
  function thru<T0, T1, R>(x: T0, f0: Ary1Fn<T0, T1>, f1: Ary1Fn<T1, R>): R;

  function mapElems<T extends {}, R>(
    fn: (x: T, i: number) => R,
  ): (xs: T[]) => R[];
}
