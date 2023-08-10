import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <Box bg="primary" minHeight="100vh">
      {children}
    </Box>
  );
}
