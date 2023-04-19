
export interface data {
    navSize: any;
    infoUser: any
    isOpen: boolean;
    cardSize: boolean;
    readonly: boolean;
    InfoCardDrawer: any,
    setIsOpen: () => void;
    setReadonly: () => void;
    setIsSizeCard: () => void;
    setInfoUser: (infoUser: any) => void;
    changeNavSize: (size: string) => void;
    setIsInfoCardDrawer: (InfoCardDrawer: any) => void;
}