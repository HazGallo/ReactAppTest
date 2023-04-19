import { ReactNode } from "react";

export interface propsDrawer {
    isOpen?: boolean;
    setIsOpen?: () => void;
    children: ReactNode;
}