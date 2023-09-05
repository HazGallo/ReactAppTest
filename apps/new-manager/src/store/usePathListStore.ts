import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { Data, SectionsResponse } from './interfaces/pathList.interface';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';

type PersistedState = {
  IdCardSelected: string;
  seletedPathName: string;
  updateCardSelected: (selectedElement: any) => void;
  updateSelectedPathName: (namePath: any) => void;
};

type NonPersistedState = {
  dataPath: Data[];
  setData: (newData: SectionsResponse) => void;
};

const initialState: NonPersistedState = {
  dataPath: [],
  setData: () => {},
};

const usePersistedStore = create(
  persist<PersistedState>(
    (set, get) => ({
      IdCardSelected: '',
      seletedPathName: '',

      updateCardSelected: (selectedElement: any) => {
        set({ IdCardSelected: selectedElement });
      },
      updateSelectedPathName: (namePath: any) => {
        set({ seletedPathName: namePath });
      },
    }),
    {
      name: 'path-list',
    }
  )
);

const useNonPersistedStore = create<NonPersistedState>((set, get) => ({
  ...initialState,
  setData: (newData) =>
    set(
      produce((state) => {
        state.dataPath = newData;
      })
    ),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('PersistedStore', usePersistedStore);
  mountStoreDevtool('NonPersistedStore', useNonPersistedStore);
}

export { usePersistedStore, useNonPersistedStore };
