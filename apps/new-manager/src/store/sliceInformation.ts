import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { data } from './interfaces/data.interface';

export const sliceInformation = create(persist<data>(
  (set) => ({
    navSize: 'small',
    isOpen: false,
    cardSize: false,
    readonly: false,
    infoUser: {},
    InfoCardDrawer: {},
    changeNavSize: (size: string) => {
      set(() => ({ navSize: size }));
    },
    setIsOpen: () => {
      set((state) => ({ isOpen: !state.isOpen }));
    },
    setIsSizeCard: () => {
      set((state) => ({
        cardSize: !state.cardSize,
      }));
    },
    setIsInfoCardDrawer: (InfoCardDrawer: any) => {
      set(() => ({
        InfoCardDrawer: InfoCardDrawer,
      }));
    },
    setInfoUser: (infoUser: any) => {
      set(() => ({
        infoUser: infoUser,
      }));
    },
    setReadonly: () => {
      set((state) => ({
        readonly: !state.readonly,
      }));
    },
  }),
  {
    name: 'data-zustand', //with this name the data is saved in the localstorage
  }
)
);
