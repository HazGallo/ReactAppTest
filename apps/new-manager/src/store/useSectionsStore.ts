import { create } from 'zustand';
import { produce } from 'immer';

//devtools
import { mountStoreDevtool } from 'simple-zustand-devtools';

import { v4 as uuidv4 } from 'uuid';

import {
  Element,
  Section,
  SectionContents,
} from './interfaces/element.interface';

export type State = {
  cardElementSelected: Element | any;
  IdSectionSelected: string;
  sectionContents: SectionContents[];
  sections: Section[];
  createSection: (name: string) => void;
  addContent: (
    sectionId: string,
    id: string,
    coverImage: string,
    type: any
  ) => void;
  addElement: (sectionId: string, element: Element) => void;
  modifySection: (sectionId: string) => {
    sectionId: string;
    sectionData: Section | {};
    sectionContentsData: SectionContents[];
  };
  modifySections: (newSections: Section[]) => void;
  getSectionElementCount: (sectionId: string) => number;
  moveSection: (
    sectionId: string,
    direction: 'top' | 'bottom' | 'up' | 'down'
  ) => void;
  updateSectionName: (sectionId: string, newName: string) => void;
  updateCardElementSelected: (selectedElement: Element | null) => void;
  updateElement: (
    sectionId: string,
    elementId: string,
    newData: Partial<Element>
  ) => void;
};

const initialState: State = {
  cardElementSelected: null,
  IdSectionSelected: '',
  sectionContents: [],
  sections: [
    {
      id: uuidv4(),
      contents: [],
      name: 'Your Contents',
    },
  ],
  addContent: () => {},
  addElement: () => {},
  createSection: () => {},
  getSectionElementCount: () => 0,
  modifySection: () => ({
    sectionId: '',
    sectionData: {},
    sectionContentsData: [],
  }),
  modifySections: () => {},
  moveSection: () => {},
  updateCardElementSelected: () => {},
  updateElement: () => {},
  updateSectionName: () => {},
};

initialState.IdSectionSelected = initialState.sections[0].id;

const useSectionsStore = create<State>((set) => ({
  ...initialState,

  createSection: (name: string) => {
    console.log(name, 'hi');
    set(
      produce((state) => {
        const newSection: Section = {
          id: uuidv4(),
          name,
          contents: [],
        };

        state.sections = [...state.sections, newSection];
      })
    );
  },

  addContent: (
    sectionId: string,
    id: string,
    coverImage: string,
    type: any
  ) => {
    set(
      produce((state) => {
        const sectionIndex = state.sections.findIndex(
          ({ id }: { id: string }) => id === sectionId
        );

        if (sectionIndex === -1) {
          console.error(`The section with ID '${sectionId}' does not exist.`);

          return;
        }

        const newContent: Section['contents'][number] = {
          id,
          coverImage,
          type,
        };

        state.sections[sectionIndex].contents = [
          ...(state?.sections[sectionIndex]?.contents || []),
          newContent,
        ];
      })
    );
  },
  addElement: (sectionId: string, element: Element) => {
    set(
      produce((state) => {
        const existingSection = state.sections.find(
          ({ id }: { id: string }) => id === sectionId
        );

        if (!existingSection) {
          console.error(`The section with ID '${sectionId}' does not exist.`);

          return;
        }

        const sectionContentsIndex = state.sectionContents.findIndex(
          ({ idSection }: { idSection: string }) => idSection === sectionId
        );

        if (sectionContentsIndex !== -1) {
          const elIndex = state.sectionContents[
            sectionContentsIndex
          ].elements.findIndex(
            ({ uid }: { uid: string }) => uid === element.uid
          );

          if (elIndex === -1) {
            // If element doesn't exists.. we add it
            const elements =
              state.sectionContents[sectionContentsIndex]?.elements ?? [];

            console.log(
              'testing - state.sectionContents[sectionContentsIndex]: ',
              state.sectionContents[sectionContentsIndex]
            );
            state.sectionContents[sectionContentsIndex].elements = [
              ...elements,
              element,
            ];

            state.addContent(
              sectionId,
              element.uid,
              element.cover.filePath,
              element.type.title
            );
          }
        } else {
          const newSectionContents: SectionContents = {
            idSection: sectionId,
            elements: [element],
          };

          state.sectionContents = [
            ...(state.sectionContents || []),
            newSectionContents,
          ];
          state.addContent(
            sectionId,
            element.uid,
            element.cover.filePath,
            element.type.title
          );
        }
      })
    );
  },

  modifySection: (sectionId: string) => {
    if (sectionId !== null) {
      const selectedSectionId = sectionId || initialState.sections[0].id;
      const section = initialState.sections.find(
        (s) => s.id === selectedSectionId
      );
      const sectionContents = initialState.sectionContents.filter(
        (s) => s.idSection === selectedSectionId
      );
      set((state) => ({ ...state, IdSectionSelected: selectedSectionId }));

      return {
        sectionId: selectedSectionId,
        sectionData: section ? { ...section } : {},
        sectionContentsData: sectionContents ? [...sectionContents] : [],
      };
    }
    return {
      sectionId: '',
      sectionData: {},
      sectionContentsData: [],
    };
  },

  getSectionElementCount: (sectionId: string) => {
    const section = initialState.sectionContents.find(
      (s) => s.idSection === sectionId
    );
    return section ? section.elements.length : 0;
  },

  modifySections: (newSections: Section[]) => {
    set((state) => {
      state.sections = newSections;
      return { ...state };
    });
  },
  moveSection: (
    sectionId: string,
    direction: 'top' | 'bottom' | 'up' | 'down'
  ) => {
    set((state) => {
      const index = state.sections.findIndex(
        (section) => section.id === sectionId
      );

      if (index === -1) {
        console.error(`The section with ID '${sectionId}' does not exist.`);
        return state;
      }

      const originalLength = state.sections.length;
      const [section] = state.sections.splice(index, 1);

      const directionOperations = {
        top: () => state.sections.unshift(section),
        bottom: () => state.sections.push(section),
        up: () =>
          state.sections.splice(
            (index - 1 + originalLength) % originalLength,
            0,
            section
          ),
        down: () =>
          state.sections.splice((index + 1) % originalLength, 0, section),
      };

      if (!directionOperations[direction]) {
        console.error(`Invalid value for direction: ${direction}`);
        return { ...state };
      }

      directionOperations[direction]();

      return { ...state };
    });
  },

  updateSectionName: (sectionId: string, newName: string) => {
    set(
      produce((state) => {
        const sectionIndex = state.sections.findIndex(
          ({ id }: { id: string }) => id === sectionId
        );

        if (sectionIndex !== -1) {
          const section = state.sections[sectionIndex];

          if (section?.name) {
            state.sections[sectionIndex].name = newName;
          } else {
            state.sections[sectionIndex] = {
              ...section,
              name: newName,
            };
          }
        }
      })
    );
  },

  updateCardElementSelected: (selectedElement: Element | null) => {
    set(
      produce((state) => {
        state.cardElementSelected = selectedElement;
      })
    );
  },

  //TODO
  updateElement: (
    sectionId: string,
    elementId: string,
    newData: Partial<Element>
  ) => {
    set(
      produce((state) => {
        const sectionIndex = state.sectionContents.findIndex(
          ({ idSection }: { idSection: string }) => idSection === sectionId
        );

        if (sectionIndex === -1) {
          return;
        }

        const elIndex = state.sectionContents[sectionIndex].elements.findIndex(
          (element: any) => element.uid === elementId
        );

        if (elIndex === -1) {
          return;
        }

        const elementToUpdate =
          state?.sectionContents[sectionIndex]?.elements[elIndex] ?? [];

        if (!elementToUpdate) {
          console.error(
            `No se pudo encontrar el elemento con ID '${elementId}'`
          );
          return;
        }

        const updatedElement = { ...elementToUpdate, ...newData };

        console.log({ updatedElement });

        if (newData.translations) {
          updatedElement.translations = newData.translations;
        }

        state.sectionContents[sectionIndex].elements[elIndex] = updatedElement;
      })
    );
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('SectionsStore', useSectionsStore);
}

export default useSectionsStore;