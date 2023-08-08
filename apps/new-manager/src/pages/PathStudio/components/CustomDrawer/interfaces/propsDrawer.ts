import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface propsDrawer {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  children?: ReactNode;
  isScrolled?: boolean; 
  setIsScrolled?: Dispatch<SetStateAction<boolean>>;
}
