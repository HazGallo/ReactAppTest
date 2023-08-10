import { useQuery } from 'react-query';
import { Element } from './interfaces/element.interface';
import { sectionContent } from '../services/sectionContent';

export const usePathList = (queryKey: string | null) => {
  const getProductListQuery = useQuery<Element[], Error>(
    ['pathList', queryKey],
    sectionContent,
    {
      staleTime: Infinity, // Los datos no se considerarán obsoletos y no se refetchearán automáticamente
      cacheTime: Infinity, // Los datos permanecerán en la caché de manera indefinida
      enabled: queryKey !== null, // <-- no realiza la consulta si queryKey es null
    }
  );

  return getProductListQuery;
};
