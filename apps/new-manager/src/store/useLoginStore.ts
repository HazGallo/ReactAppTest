import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { data } from './interfaces/login.interface';

const useLoginCheckStore = create(
  persist<data>(
    (set) => ({
      dataLogin: {},

      addData: (newData: any) => {
        set((state) => ({
          dataLogin: newData,
        }));
      },
    }),
    {
      name: 'data-login',
    }
  )
);

export default useLoginCheckStore;
