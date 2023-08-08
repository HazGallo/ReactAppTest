import React from 'react';

import { ChakraProvider, ThemeProvider } from '@chakra-ui/react';

import { theme } from './theme';
import '@fontsource/roboto';
import './styles/cssReset';

function App({ children }: { children: any }) {
  return (
    <ChakraProvider resetCSS={true}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <main>{children}</main>
        </ThemeProvider>
      </React.StrictMode>
    </ChakraProvider>
  );
}

export default App;
