export interface HistoryLConfig {
  p: number;
  e: boolean;
  m: number;
}

export interface HistoryLEntry<T> {
  l: number;
  r: T;
  u: number;
}

export interface HistoryL<T> {
  /**
   * Configuration
   */
  c: HistoryLConfig;

  /**
   * Index
   */
  i: number;

  /**
   * Timestamps
   */
  t: HistoryLEntry<number>;

  /**
   * Values
   */
  v: HistoryLEntry<T>;
}
