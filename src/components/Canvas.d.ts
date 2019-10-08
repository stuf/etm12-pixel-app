import { Observable, Property } from 'kefir';
import { IColorState } from '../core/state.d';

export interface Props {
  size: Property<[number, number], any>;
  scale: Property<number, any>;
  color: Property<IColorState, any>;
  canvasData: Property<number[], any>;
}
