import { FC, PropsWithChildren } from 'react';
import { theme } from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/roboto';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Badge } from './components/Badge';
import { Button } from './components/Button';
import { ButtonIco } from './components/ButtonIco';
import { ButtonIcoGroup } from './components/ButtonIcoGroup';
import { CardItem } from './components/Cards/CardItem';
import { DropdownMenuOption } from './components/DropdownMenuOption';
import { DropdownMenu } from './components/DropdownMenu';
import { ButtonNew } from './components/ButtonNew';
import { FileDrop } from './components/FileDrop';
import { FileDropper } from './components/FileDropper';
import { Ico } from './components/Ico';
import { ImageSelector } from './components/ImageSelector';
import { InputCheckbox } from './components/InputCheckbox';
import { InputDropdown } from './components/InputDropdown';
import { InputText } from './components/InputText';
import { InputTextArea } from './components/InputTextArea';
import { ItemAmount } from './components/ItemAmount';
import { ItemGroup } from './components/ItemGroup';
import { ItemGroupHover } from './components/ItemGroup/components/ItemGroupHover';
import { ItemGroupNew } from './components/ItemGroupNew';
import { ModuleSelector } from './components/ModuleSelector';
import { PlaceholderArea } from './components/PlaceholderArea';
import { Selector } from './components/Selector';
import { SelectorSystem } from './components/SelectorSystem';
import { Switch } from './components/Switch';
import { Tag } from './components/Tag';
import { TagSystem } from './components/TagSystem';
import { TextEditable } from './components/TextEditable';
import { UserAvatar } from './components/UserAvatar';
import { PlaceholderTestQuestion } from './components/PlaceholderTestQuestion';
import { CardQuestion } from './components/Cards/CardQuestion/index';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export {
  CardQuestion,
  ItemGroup,
  ItemGroupNew,
  Badge,
  ItemGroupHover,
  Button,
  ButtonNew,
  ButtonIco,
  ButtonIcoGroup,
  CardItem,
  DropdownMenu,
  DropdownMenuOption,
  FileDrop,
  FileDropper,
  PlaceholderTestQuestion,
  Ico,
  ImageSelector,
  InputCheckbox,
  InputDropdown,
  InputText,
  ItemAmount,
  InputTextArea,
  ModuleSelector,
  Selector,
  SelectorSystem,
  Switch,
  Tag,
  TagSystem,
  TextEditable,
  theme,
  ThemeProvider,
  UserAvatar,
  PlaceholderArea,
};
