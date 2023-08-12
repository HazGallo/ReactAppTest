import { Box } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import usePathList from 'src/store/usePathList';
import useSectionsStore from 'src/store/useSectionsStore';
import { useContentList } from '../hooks/useContentList';
import { usePathSection } from '../hooks/usePathSection';

export default function Layout({ children }: { children: React.ReactNode }) {
  const {
    createSection,
    IdSectionSelected,
    addElement,
    modifySection,
    resetStore,
  } = useSectionsStore();
  const [processedIds, setProcessedIds] = useState<string[]>([]);

  const { IdCardSelected } = usePathList();

  const { data } = usePathSection(IdCardSelected);

  // Usar useMemo para determinar si debemos hacer la petición
  const shouldFetch = useMemo(
    () => IdSectionSelected && !processedIds.includes(IdSectionSelected),
    [IdSectionSelected]
  );

  const { data: dataContentList } = useContentList(
    shouldFetch ? IdSectionSelected : null
  );

  useEffect(() => {
    if (data) {
      data.forEach((section) => {
        createSection(section.uid, section.title);
      });

      modifySection(data[0].uid);
    }
  }, [data]);

  useEffect(() => {
    if (dataContentList) {
      dataContentList.forEach((contentItem: any) => {
        addElement(IdSectionSelected, contentItem.content);
      });
    }
    setProcessedIds((prevIds) => [...prevIds, IdSectionSelected]);
  }, [IdSectionSelected, dataContentList]);

  return (
    <Box bg="primary" minHeight="100vh">
      {children}
    </Box>
  );
}
