import { Tab } from '@chakra-ui/react';

interface Props {
  children?: any;
}

export const CustomTab = ({ children }: Props) => {
  return (
    <Tab
      _active={{ border: '0px', bg: 'transparent', color: 'inherit' }}
      _selected={{ border: '0px', bg: 'transparent', color: 'inherit' }}
      borderBottom="none"
      p="0"

    >
      {children}
    </Tab>
  );
};
