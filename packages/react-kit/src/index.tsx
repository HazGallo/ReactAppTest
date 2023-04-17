import { theme } from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import { CardItem } from './components/CardItem';
import { ButtonIco } from './components/ButtonIco';
import { Ico } from './components/Ico'
import { FileDropper } from './components/FileDropper';
import { Selector } from './components/Selector';
import { Tag } from './components/Tag';
import { TextEditable } from './components/TextEditable';
import { FC, PropsWithChildren } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export {
  theme,
  ThemeProvider,
  CardItem,
  ButtonIco,
  Ico,
  FileDropper,
  Selector,
  Tag,
  TextEditable,
};
