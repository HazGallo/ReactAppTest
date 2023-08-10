import { produce } from 'immer';
import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { v4 as uuidv4 } from 'uuid';

import { Element } from './interfaces/pathList.interface';

export type State = {
  elements: Element[];

  addElement: (element: Element) => void;
};

const initialState: State = {
  elements: [],
  addElement: () => {},
};

const useSectionsStore = create<State>((set) => ({
  ...initialState,

  addElement: (element) => {
    set((state) =>
      produce(state, (draft) => {
        draft.elements.push(element);
      })
    );
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('SectionsStore', useSectionsStore);
}

export default useSectionsStore;
