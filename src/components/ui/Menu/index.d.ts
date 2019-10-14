import { FunctionComponent } from 'react';
import { MaybeObservable } from 'types';

/**
 * Represents a single menu item, that itself may contain
 * menu items
 */
export interface MenuItem {
  label: MaybeObservable<string>;
  accelerator?: MaybeObservable<any>;
  items?: MaybeObservable<MenuItem[]>;
}

export interface Props {
  items: MaybeObservable<MenuItem[]>;
}

export interface Component extends FunctionComponent<Props> { }
