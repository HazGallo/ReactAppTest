import { produce } from 'immer';
import { create } from 'zustand';

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
  createSection: (id: string, name: string) => void;

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

  createSection: (id: string, name: string) => {
    set(
      produce((state) => {
        // Verifica si el id ya existe en las secciones
        const sectionExists = state.sections.some(
          (section: Section) => section.id === id
        );

        if (!sectionExists) {
          const newSection: Section = {
            id,
            name,
            contents: [],
          };

          state.sections = [...state.sections, newSection]; // usando el operador de propagación
        }
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

          const newContent: Section['contents'][number] = {
            id: element.uid,
            coverImage: element.cover.filePath,
            type: element.type.title,
          };

          // Verificar si newContent ya existe en section.contents
          const contentAlreadyExists = state.sections[
            existingSectionIndex
          ].contents.some((content) => content.id === newContent.id);

          if (contentAlreadyExists) {
            console.error(
              `Content with ID '${newContent.id}' already exists in the section.`
            );
            return; // Si ya existe, salimos sin hacer nada más.
          }

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
                  newContent,
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
                  newContent,
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

          console.log(section?.name, 'sectionName');

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
