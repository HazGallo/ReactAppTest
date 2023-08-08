import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { learning } from './interfaces/learning.interface';

export const useLearingStore = create(
  persist<learning>(
    (set, get) => ({
      lang: 'en',
      paths: [],
      getPaths: () => {
        return get().paths;
      },
      getPath: (id: string) => {
        return get().paths.find((path) => path.id === id);
      },
      setPath: (path) => {
        set((state: any) => {
          const paths = state.paths;
          paths.push(path);

          return { paths: paths };
        });
      },
    }),
    { name: 'learning-storage' }
  )
);
