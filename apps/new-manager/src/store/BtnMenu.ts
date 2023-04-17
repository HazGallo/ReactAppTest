import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface repos {
  navSize: any;
  changeNavSize: (size: string) => void;
  isOpen: boolean;
  cardSize: boolean;
  readonly: boolean;
  setIsOpen: () => void;
  setReadonly: () => void;
  setIsSizeCard: () => void;
  setIsInfoCardDrawer: (InfoCardDrawer: any) => void;
  InfoCardDrawer: any
}

export const useNavSize = create(
  persist<repos>(
    (set) => ({
      navSize: 'small',
      isOpen: false,
      cardSize: false,
      InfoCardDrawer: {},
      readonly: false,
      changeNavSize: (size: string) => {
        set((state) => ({
          navSize: size,
        }));
      },
      setIsOpen: () => {
        set((state) => ({
          isOpen: !state.isOpen,
        }));
      },
      setIsSizeCard: () => {
        set((state) => ({
          cardSize: !state.cardSize,
        }));
      },
      setIsInfoCardDrawer: (InfoCardDrawer: any) => {
        set((state) => ({
          InfoCardDrawer: InfoCardDrawer,
        }));
      },
      setReadonly : () => {
        set((state) => ({
          readonly: !state.readonly,
        }));
      },
    }),
    {
      name: 'navSize-sidevar',
    }
  )
);
