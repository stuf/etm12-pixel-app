import { O } from 'ts-toolbelt';

declare global {
  /**
   * Interface for color palettes
   */
  interface IPalette {
    /**
     * Name of the palette
     */
    name: string;
    /**
     * Palette's colors as hexstrings
     */
    items: string[];
  }

  /**
   * Interface for representing application state
   */
  interface IState {
    canvas: {};
    color: {
      palettes: IPalette[];
    };
  }

  //

  /**
   * Drawing canvas interface
   */
  interface ICanvas {
    /**
     * 2-tuple representing the (width, height) of the canvas
     */
    size: [number, number];

    /**
     * Scaling factor for the drawing canvas
     */
    scale: number;
  }
}
