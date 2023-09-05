import { Box } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import { usePersistedStore } from 'src/store/usePathListStore';
import useSectionsStore from 'src/store/useSectionsStore';
import { Section } from '../hooks/interfaces/pathSection.interface';
import { useContentList } from '../hooks/useContentList';
import { usePathSection } from '../hooks/usePathSection';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { createSection, IdSectionSelected, addElement, modifySection } =
    useSectionsStore();
  const [processedIds, setProcessedIds] = useState<string[]>([]);

  const { IdCardSelected } = usePersistedStore();

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
      data.forEach((section: Section) => {
        const contents = section.firstThreeContentCovers.map(
          (contentCover) => ({
            id: section.uid,
            coverImage: contentCover.filePath,
            type: contentCover.dominantColor,
          })
        );

        createSection({
          id: section.uid,
          name: section.title,
          contents: contents,
        });
      });

      modifySection(data[0].uid);
    }
  }, [data]);

  useEffect(() => {
    if (dataContentList) {
      dataContentList.forEach((contentItem: any) => {
        addElement(IdSectionSelected, contentItem);
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
