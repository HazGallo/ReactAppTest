import { useQuery } from 'react-query';
import { pathSection } from '../services/pathSection';
import { Section } from './interfaces/pathSection.interface';

export const usePathSection = (queryKey: string | null) => {
  const getProductListQuery = useQuery<Section[], Error>(
    ['pathSection', queryKey],
    pathSection,
    {
      staleTime: Infinity, // Los datos no se considerarán obsoletos y no se refetchearán automáticamente
      cacheTime: Infinity, // Los datos permanecerán en la caché de manera indefinida
    }
  );

  return getProductListQuery;
};
