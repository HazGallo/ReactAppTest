import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // const { addElement, IdSectionSelected } = useSectionsStore();
  // const [processedIds, setProcessedIds] = useState<string[]>([]);

  // // Usar useMemo para evitar operaciones costosas en cada renderizado
  // const shouldFetch = useMemo(
  //   () => IdSectionSelected && !processedIds.includes(IdSectionSelected),
  //   [IdSectionSelected, processedIds]
  // );

  // const { data, error } = useContentList(
  //   shouldFetch ? IdSectionSelected : null
  // );

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     data.forEach((item: any) => {
  //       addElement(IdSectionSelected, item);
  //     });
  //     setProcessedIds((prevIds) => [...prevIds, IdSectionSelected]);
  //   }
  // }, [data, IdSectionSelected]);

  return (
    <Box bg="primary" minHeight="100vh">
      {children}
    </Box>
  );
}
