import { produce } from 'immer';
import { create } from 'zustand';

//devtools
import { mountStoreDevtool } from 'simple-zustand-devtools';

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
  createSection: (sectionData: Section) => void;
  updateSectionContents: (
    sectionId: string,
    newContents: {
      id: string;
      coverImage: string;
      type: any;
    }[]
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
  resetStore: () => void;
  updateElement: (
    sectionId: string,
    elementId: string,
    newData: Partial<Element> | any
  ) => void;
};

const initialState: State = {
  cardElementSelected: null,
  IdSectionSelected: '',
  sectionContents: [],
  sections: [],
  updateSectionContents: () => {},
  addElement: () => {},
  resetStore: () => {},
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

const useSectionsStore = create<State>((set) => ({
  ...initialState,

  resetStore: () => {
    set(
      produce((state) => {
        state.cardElementSelected = null;
        state.IdSectionSelected = '';
        state.sectionContents = [];
        state.sections = [];
      })
    );
  },

  createSection: (sectionData: Section) => {
    set(
      produce((state) => {
        // Verifica si el id ya existe en las secciones
        const sectionExists = state.sections.some(
          (section: Section) => section.id === sectionData.id
        );

        if (!sectionExists) {
          state.sections = [...state.sections, sectionData]; // usando el operador de propagación
        }
      })
    );
  },

  updateSectionContents: (
    sectionId: string,
    newContents: {
      id: string;
      coverImage: string;
      type: any;
    }[]
  ) => {
    set(
      produce((state) => {
        const sectionIndex = state.sections.findIndex(
          (section: Section) => section.id === sectionId
        );

        if (sectionIndex === -1) {
          console.error(`The section with ID '${sectionId}' does not exist.`);
          return;
        }

        const updatedSection = { ...state.sections[sectionIndex] };
        updatedSection.contents = [
          ...updatedSection.contents,
          ...newContents.map((content) => ({
            id: content.id,
            coverImage: content.coverImage,
            type: content.type,
          })),
        ];

        state.sections[sectionIndex] = updatedSection;
      })
    );
  },

  addElement: (sectionId: string, element: Element) => {
    set(
      produce(
        (state: {
          sections: Section[];
          sectionContents: SectionContents[];
        }) => {
          const existingSectionIndex = state.sections.findIndex(
            ({ id }: { id: string }) => id === sectionId
          );

          if (existingSectionIndex === -1) {
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

              state.sectionContents[sectionContentsIndex].elements = [
                ...elements,
                element,
              ];
            }

            // Aquí añades el contenido
            if (existingSectionIndex !== -1) {
              const updatedSection: Section = {
                ...state.sections[existingSectionIndex],
                contents: [
                  ...state.sections[existingSectionIndex].contents,
                  // newContent,
                ],
              };

              state.sections = [
                ...state.sections.slice(0, existingSectionIndex),
                updatedSection,
                ...state.sections.slice(existingSectionIndex + 1),
              ];
            }
          } else {
            const newSectionContents: SectionContents = {
              idSection: sectionId,
              elements: [element],
            };

            state.sectionContents = [
              ...state.sectionContents,
              newSectionContents,
            ];

            // Aquí también añades el contenido
            if (existingSectionIndex !== -1) {
              const updatedSection: Section = {
                ...state.sections[existingSectionIndex],
                contents: [
                  ...state.sections[existingSectionIndex].contents,
                  // newContent,
                ],
              };

              state.sections = [
                ...state.sections.slice(0, existingSectionIndex),
                updatedSection,
                ...state.sections.slice(existingSectionIndex + 1),
              ];
            }
          }
        }
      )
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

      // Creamos una copia del array original
      const sectionsCopy = [...state.sections];

      const section = sectionsCopy.splice(index, 1)[0];
      const originalLength = sectionsCopy.length + 1; // Se agregó 1 porque ya eliminamos un elemento

      const directionOperations = {
        top: () => sectionsCopy.unshift(section),
        bottom: () => sectionsCopy.push(section),
        up: () => {
          const newIndex = index === 0 ? originalLength - 1 : index - 1;
          sectionsCopy.splice(newIndex, 0, section);
        },
        down: () => {
          const newIndex = (index + 1) % originalLength;
          sectionsCopy.splice(newIndex, 0, section);
        },
      };

      if (!directionOperations[direction]) {
        console.error(`Invalid value for direction: ${direction}`);
        return { ...state };
      }

      directionOperations[direction]();

      return { ...state, sections: sectionsCopy };
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
