import { useEffect, useState } from 'react';

import { Selector } from '../Selector';
import { types } from '../../shared/iconsTypes/icons';

interface SelectorData {
  typeIcon?: string; //It is optional, but for as long as it is not, until they send the new icons
  title: string;
  description?: string;
  isDisabled?: boolean;
  warning?: boolean;
}

interface Props {
  selectorData: SelectorData[];
  type: 'lg' | 'md' | 'sm' | 'selectorBig';
  selectionType: 'single' | 'multipleChoice';
  selectedDefault?: number;
}

export const SelectorSystem = (props: Props) => {
  const {
    selectionType,
    type,
    selectorData,
    selectedDefault = 0,
    ...rest
  } = props;

  const [selectedItems, setSelectedItems] = useState<number[]>([
    selectedDefault,
  ]);

  useEffect(() => {
    if (selectionType === 'single') {
      setSelectedItems([selectedDefault]);
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
    <>
      {selectorData.map((value, index) => (
        <Selector
          key={index}
          type={type}
          typeIcon={value.typeIcon as types}
          title={value.title}
          description={value.description}
          isDisabled={value.isDisabled}
          warning={value.warning}
          isSelected={selectedItems.includes(index)}
          onClick={() => handleSelect(index)}
        />
      ))}
    </>
  );
};
