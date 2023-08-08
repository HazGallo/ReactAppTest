import { ReactNode } from 'react';

export interface propsDrawer {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  children?: ReactNode;
}
