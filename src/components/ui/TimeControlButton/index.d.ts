import { Property } from 'kefir';

export interface Props {
  count: Property<number, any>;
  children: string;
}
