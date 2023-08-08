import { Flex } from '@chakra-ui/react';
import { SelectorSystem } from '../../components/SelectorSystem';

interface SelectorData {
  typeIcon?: string; //It is optional, but for as long as it is not, until they send the new icons
  title: string;
  description?: string;
  warning?: boolean;
}

interface Props {
  selectorData: SelectorData[];
  type: 'lg' | 'md' | 'sm' | 'selectorBig';
  selectionType: 'single' | 'multipleChoice';
}

export const SelectorSystemExample = (props: Props) => {
  const { selectionType, type, selectorData, ...rest } = props;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap="4"
      marginTop={8}
    >
      <SelectorSystem
        selectorData={selectorData}
        type={type}
        selectionType={selectionType}
      />
    </Flex>
  );
};
