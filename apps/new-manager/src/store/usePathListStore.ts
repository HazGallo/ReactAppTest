import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { data } from './interfaces/pathList.interface';
import { persist } from 'zustand/middleware';

const usePathListStore = create(
  persist<data>(
    (set, get) => ({
      dataPath: [],
      IdCardSelected: '',

      setData: (newData: any) => {
        set({ dataPath: newData });
      },

      updateCardSelected: (selectedElement: any) => {
        set({ IdCardSelected: selectedElement });
      },
    }),
    {
      name: 'path-list',
    }
  )
);

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('PathListStore', usePathListStore);
}

export default usePathListStore;
