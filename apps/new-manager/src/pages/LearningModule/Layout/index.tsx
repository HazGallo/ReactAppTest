import { Box } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import { usePathList } from '../hooks/usePathList';
import pathListStore from 'src/store/usePathList';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data, error, isLoading } = usePathList('hi');

  const { setData } = pathListStore();

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  return (
    <Box bg="primary" minHeight="100vh">
      {children}
    </Box>
  );
}
