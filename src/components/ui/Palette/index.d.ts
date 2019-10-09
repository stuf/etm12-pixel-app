import { Property } from 'kefir';

export interface Props {
  name: Property<string, any>;
  items: Property<string[], any>;
  currentColor: Property<number, any>;
}
