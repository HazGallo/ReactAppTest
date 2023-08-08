import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { ItemGroup } from '../../components/ItemGroup';

interface Props {
  isDisabled: boolean;
  readonly: boolean;
  avatars: any;
  placeholder: string;
  title?: string;
  src: string;
  amount: number;
  BadgeGroupColor: string;
  onClick?: () => void;
}

export const ItemGroupExample = ({
  avatars,
  isDisabled,
  placeholder,
  title,
  src,
  BadgeGroupColor,
  onClick,
  readonly,
  amount,
}: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  const [value, setValue] = useState('Text editable');

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Box
      width={['200px', '283px', '320px', '350px', '380px']}
      height={['157px', '177px', '187px', '200px', '210px']}
      m="20px"
    >
      <ItemGroup
        isDisabled={isDisabled}
        avatars={avatars}
        placeholder={placeholder}
        title={title}
        src={src}
        BadgeGroupColor={BadgeGroupColor}
        valueHeading={value}
        handleCardClick={handleCardClick}
        isSelected={isSelected}
        readonly={readonly}
        amount={amount}
        setValueHeading={(name) => setValue(name)} //  onChange={onChange}
      />
    </Box>
  );
};
