import { Flex, FlexProps } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Selector } from '../Selector';

interface SelectorData {
  icon?: any;
  title: string;
  description?: string;
}

interface Props extends FlexProps {
  selectorData: SelectorData[];
  disabled: boolean;
  warning: boolean;
  type: 'lg' | 'md' | 'sm';
  selectionType: 'single' | 'multipleChoice';
}

export const SelectorSystem = (props: Props) => {
  const { selectionType, disabled, warning, type, selectorData, ...rest } =
    props;

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  useEffect(() => {
    if (selectionType === 'single') {
      setSelectedItems([]);
    }
  }, [selectionType]);

  const handleSelect = (index: number) => {
    if (selectionType === 'multipleChoice') {
      setSelectedItems((prevSelected) => {
        if (prevSelected.includes(index)) {
          return prevSelected.filter((itemIndex) => itemIndex !== index);
        } else {
          return [...prevSelected, index];
        }
      });
    } else {
      setSelectedItems([index]);
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap="4"
      marginTop={8}
      {...rest}
    >
      {selectorData.map((value, index) => (
        <Selector
          type={type}
          icon={value.icon}
          title={value.title}
          description={value.description}
          disabled={disabled}
          warning={warning}
          isSelected={selectedItems.includes(index)}
          onClick={() => handleSelect(index)}
        />
      ))}
    </Flex>
  );
};
