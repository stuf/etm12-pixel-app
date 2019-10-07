/**
 * Represents a single menu item, that itself may contain
 * menu items
 */
export interface MenuItem {
  label: string;
  accelerator?: any;
  items?: MenuItem[];
}

export interface Props {
  items: MenuItem[];
}
