interface SaveImageCtor {
  (imageData: number[], width: number, height: number): typeof SaveImageCtor;
}

export interface Effect {
  SaveImage(imageData: number[], width: number, height: number): SaveImageCtor;
  LoadImage(): LoadImage;
}

export interface TaggedSum<T> {
  from(x: any): T;
  is(x: any): boolean;
  cata(fs: any): any;
}
