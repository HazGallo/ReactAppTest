import { useQuery } from 'react-query';
import { Element } from './interfaces/element.interface';

export const useContentList = (queryKey: string | null) => {
  const getProductListQuery = useQuery<Element[], Error>(
    ['videoList', queryKey],
    async () => {
      const response = await fetch(
        'https://dev-content.iseazyengage.com/api/v1/content/list/section-content-uid?total=5',
        {
          method: 'GET',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch product list');
      }

      const responseData = await response.json();
      return responseData.data;
    },
    {
      staleTime: Infinity, // Los datos no se considerarán obsoletos y no se refetchearán automáticamente
      cacheTime: Infinity, // Los datos permanecerán en la caché de manera indefinida
      enabled: queryKey !== null, // <-- no realiza la consulta si queryKey es null
    }
  );

  return getProductListQuery;
};
