export interface ICanvasState {
  size: [number, number];
  scale: number;
}

export interface ICurrentFileState {
  name: string;
  createdAt: Date;
}

export interface IPalette {
  name: string;
  source: string;
  items: string[];
}

export interface IColorState {
  currentColor: number;
  currentPalette: number;
  palettes: IPalette[];
}

//

export interface IState {
  canvas: ICanvasState;
  currentFile: ICurrentFileState;
  color: IColorState;
}
