import { useQuery } from 'react-query';
import { pathSection } from '../services/pathSection';
import { Section } from './interfaces/pathSection.interface';

export const usePathSection = (sectionId: string | null) => {
  const getProductListQuery = useQuery<Section[], Error>(
    ['pathSection', sectionId],
    () => pathSection(sectionId), // Pasa el queryKey como sectionId
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return getProductListQuery;
};
