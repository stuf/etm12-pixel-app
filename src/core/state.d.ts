export interface IState {
  canvas: ICanvasState;
  currentFile: ICurrentFileState;
  color: IColorState;
  menu: IMenuState;
}

export interface ICanvasState {
  size: [number, number];
  scale: number;
}

export interface ICurrentFileState {
  name: string;
  createdAt: Date;
}

export interface IColorState {
  currentColor: number;
  currentPalette: number;
  palettes: IPalette[];
}

export interface IMenuState {}

//

export interface IPalette {
  name: string;
  items: string[];
}