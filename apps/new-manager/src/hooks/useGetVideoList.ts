import { useQuery } from 'react-query';
import { Element } from './interfaces/Element.interface';

export const useGetVideoList = () => {
  const getProductListQuery = useQuery<Element[], Error>(
    'videoList',
    async () => {
      try {
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
        return responseData.data; // retornar directamente los datos que necesitas
      } catch (e) {
        return e;
      }
    }
  );

  return getProductListQuery;
};
