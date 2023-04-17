import React from 'react';
import { ChakraProvider, ThemeProvider } from '@chakra-ui/react';
import '@fontsource/roboto';
import { theme } from './theme';

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
