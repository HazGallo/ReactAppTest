import { produce } from 'immer';
import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { SectionsResponse, Data } from './interfaces/pathList.interface';
// (Aquí las interfaces creadas)

export type State = {
  dataPath: Data[];
  IdCardSelected: string;
  setData: (newData: SectionsResponse) => void;
  updateCardSelected: (selectedElement: string | null) => void;
};

const initialState: State = {
  dataPath: [],
  IdCardSelected: '',
  setData: (newData: SectionsResponse) => {},
  updateCardSelected: () => {},
};

const useSectionsStore = create<State>((set, get) => ({
  ...initialState,
  setData: (newData) =>
    set(
      produce((state) => {
        state.dataPath = newData;
      })
    ),

  updateCardSelected: (selectedElement: string | null) => {
    set(
      produce((state) => {
        state.IdCardSelected = selectedElement;
      })
    );
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('SectionsStore', useSectionsStore);
}

export default useSectionsStore;
