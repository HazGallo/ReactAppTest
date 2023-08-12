import { useMutation } from 'react-query';
import { createSection } from '../services/createSection';
import { Video } from './interfaces/section.interface';

export const useCreateSection = (onMutationSuccess: (data: Video) => void) => {
  return useMutation(createSection, {
    onSuccess: (data: Video) => {
      onMutationSuccess(data);
    },
  });
};
