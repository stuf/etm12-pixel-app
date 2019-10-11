export interface Tick {
  label: string;
  value: number;
}

export interface Props {
  tickStart: Tick;
  tickEnd: Tick;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange(ev: InputEvent): void;
}
