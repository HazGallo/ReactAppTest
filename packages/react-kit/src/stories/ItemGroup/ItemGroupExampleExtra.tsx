import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { ItemGroup } from '../../components/ItemGroup';
import { ImageSelector } from '../../components/ImageSelector';
import BadgeGroup from '../../components/ItemGroup/components/BadgeGroup';

interface Props {
  isDisabled: boolean;
  readonly: boolean;
  avatars: any;
  placeholder: string;
  title?: string;
  src: string;
  BadgeGroupColor: string;
  amount: number;
  onClick?: () => void;
}

export const ItemGroupExampleExtra = ({
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
  const [isFileUploaded, setIsFileUploaded] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState('Text editable');

  const onChangeImageSelector = () => {
    console.log('onChangeImageSelector');
  };

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Box
      width={['200px', '270px', '320px', '350px', '380px']}
      height={['267px', '267px', '267px', '280px', '300px']}
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
        onClick={onClick}
        handleCardClick={handleCardClick}
        isSelected={isSelected}
        readonly={readonly}
        amount={amount}
        setValueHeading={(name) => setValue(name)}
      >
        <Box
          width="full"
          height="90px"
          position="relative"
          opacity={isDisabled ? '0.3' : '1'}
          display="flex"
          justifyItems="center"
          justifyContent="center"
          pointerEvents={readonly ? 'none' : 'none'}
        >
          <ImageSelector
            sizeMenu="sm"
            hasError={false}
            warning={false}
            errorMessage={''}
            readonly={readonly}
            isDisabled={isDisabled}
            onDrop={(files: any) => {
              console.log({ files });
            }}
            onChangeProgress={setIsFileUploaded}
            progressChange={true}
            onChange={onChangeImageSelector}
            onSelect={onChangeImageSelector}
            placeholderSrc={
              'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            }
          />

          <Box
            position="absolute"
            left="0"
            bottom="0"
            py="10px"
            px="9px"
            zIndex={99}
          >
            <BadgeGroup BadgeGroupColor={BadgeGroupColor} />
          </Box>
        </Box>
      </ItemGroup>
    </Box>
  );
};
