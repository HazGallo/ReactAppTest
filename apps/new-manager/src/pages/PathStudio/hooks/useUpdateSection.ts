import { useMutation } from 'react-query';
import { updateSection } from '../services/updateSection';
import { Section } from './interfaces/section.interface';

export const useUpdateSection = (
  onMutationSuccess: (data: Section) => void
) => {
  return useMutation(updateSection, {
    onSuccess: (data: Section) => {
      onMutationSuccess(data);
    },
  });
};
