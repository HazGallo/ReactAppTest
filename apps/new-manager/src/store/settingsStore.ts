import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { data, Video } from './interfaces/data.interface';

export const useSettings = create(
  persist<data>(
    (set) => ({
      navSize: 'small',
      isOpen: false, //TODO: delete this
      sendData: false,
      cardSize: false,
      readonly: false, //TODO: re-check
      infoUser: {},
      InfoCardDrawer: {},
      //TODO: move to another store ?
      dataVideo: {} as Video, // Nuevo campo dataVideo inicializado como un objeto vacío de tipo Video

      changeNavSize: (size: string) => {
        set((state) => ({ navSize: size }));
      },

      //TODO: delete this
      setIsOpen: () => {
        set((state) => {
          if (state.isOpen) {
            return { isOpen: false };
          } else {
            return { isOpen: true };
          }
        });
      },
      
      setSendData: () => {
        set((state) => ({
          sendData: !state.sendData,
        }));
      },

      handleSizeCardMd: () => {
        set((state) => ({
          cardSize: true,
        }));
      },

      handleSizeCardSm: () => {
        set((state) => ({
          cardSize: false,
        }));
      },

      setIsInfoCardDrawer: (InfoCardDrawer: any) => {
        set((state) => ({
          InfoCardDrawer: InfoCardDrawer,
        }));
      },
      setInfoUser: (infoUser: any) => {
        set((state) => ({
          infoUser: infoUser,
        }));
      },
      setReadonly: () => {
        set((state) => ({
          readonly: !state.readonly,
        }));
      },
      setVideo: (video: Video) => {
        set((state) => ({
          dataVideo: video,
        }));
      },
    }),
    {
      name: 'data-zustand', // con este nombre los datos se guardan en el localstorage
    }
  )
);
