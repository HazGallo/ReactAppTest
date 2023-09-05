import { useMutation } from 'react-query';
import { createSection } from '../services/createSection';
import { Section } from './interfaces/section.interface';

export const useCreateSection = (
  onMutationSuccess: (data: Section) => void
) => {
  return useMutation(createSection, {
    onSuccess: (data: Section) => {
      onMutationSuccess(data);
    },
  });
};
