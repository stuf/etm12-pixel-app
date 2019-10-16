export interface IMenuItem {
  label: string;
  accelerator?: any;
}

export interface IPalette {
  name: string;
  source: string;
  items: string[];
}

export interface IPaletteColor {
  name?: string;
  value?: string;
}

export interface IPaletteSpecial {
  name?: string;
  type: string;
}

export type IPaletteItem = IPaletteColor | IPaletteSpecial;
