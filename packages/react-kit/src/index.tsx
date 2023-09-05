import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/roboto';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import { FC, PropsWithChildren } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { theme } from './theme';

import { Button } from './components/Button';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export { Button, ThemeProvider, theme };
