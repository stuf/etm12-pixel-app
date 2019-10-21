// @ts-check
/**
 * Settings related to undo/redo functinality
 */
export const history = {
  /**
   * How many history entries should be retained
   */
  maxCount: 20,

  /**
   * Should equal states be pushed into the history stack.
   *
   * N.B. This will count towards `maxCount`!
   */
  pushEquals: false,

  /**
   * Debounce saving of history by this amount of milliseconds.
   */
  replacePeriod: 200,
};

/**
 * Settings related to the drawing canvas
 */
export const canvas = {
  /**
   * How many per-pixel color channels there are.
   *
   * Even though this is configurable, changing this will most likely
   * break drawing, as `HTMLCanvasElement`s are forced to use four
   * color channels per pixel.
   */
  colorChannels: 4,

  /**
   * Default image size indicated as `[width, height]`.
   */
  initialSize: [32, 32],

  /**
   * Default scaling factor
   */
  initialScale: 16,
};
