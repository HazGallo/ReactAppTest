import { useQuery } from 'react-query';
import { sectionContent } from '../services/sectionContent';

export const useContentList = (id: string | null) => {
  const getProductListQuery = useQuery<Element[], Error>(
    ['videoList', id],
    () => {
      if (typeof id === 'string') {
        return sectionContent(id);
      }
      throw new Error('ID must be a string.');
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: !!id,
    }
  );

  return getProductListQuery;
};
