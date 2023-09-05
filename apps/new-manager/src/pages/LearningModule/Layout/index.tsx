import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { usePathList } from '../hooks/usePathList';
import { useNonPersistedStore,usePersistedStore } from 'src/store/usePathListStore';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data } = usePathList('pathList');

  const { setData } = useNonPersistedStore();
  const { IdCardSelected } = usePersistedStore();



  useEffect(() => {
    if (data) {
      setData(data);

      console.log(data, "reset")

    }


  }, [data]);


  


    

  return (
    <Box bg="primary" minHeight="100vh">
      {children}
    </Box>
  );
}
