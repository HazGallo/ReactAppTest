import React, { useEffect, useMemo, useState } from 'react';
import useSectionsStore from 'src/store/useSectionsStore';
import { useContentList } from '../hooks/useContentList';
import { usePathSection } from '../hooks/usePathSection';
import usePathList from 'src/store/usePathListStore';
import useLoginCheckStore from 'src/store/useLoginStore';
import { LoadingLearning } from "../../LoadingLearning"
import { Box } from '@chakra-ui/react';

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
  const { dataLogin } = useLoginCheckStore();
  console.log(dataLogin, 'new');

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
      data.forEach((section:any) => {
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
    <Box
     bg="primary"
      minHeight="100vh"
      >
      {children}
    </Box>
  );
}
