import { Box } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import { usePathList } from '../hooks/usePathList';
import pathListStore from 'src/store/usePathListStore';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data } = usePathList('pathList');

  const { setData } = pathListStore();

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  console.log(data, "hello")

  return (
    <Box bg="primary" minHeight="100vh">
      {children}
    </Box>
  );
}
