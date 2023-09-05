import {
  Box,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Heading,
  Image,
  Text,
  Icon,
  Button,
  IconButton,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import {
  IconGame,
  IconGameNew,
  IconDotsHorizontal,
  IconArticle,
} from '../../assets/customIcons';
import { ImageCard } from '../CardItem/Image/index';
import { EditableText } from '../CardItem/Editable/index';
import { CBox } from '../CardItem/CheckBox/index';
import { TextTime } from '../CardItem/TimeText/index';
import { Ico } from '../CardItem/Ico/index';
import { TextDate } from '../CardItem/textDate/index';
import { types, IconsTypes } from '../../shared/iconsTypes/icons';

export interface CardItemProps {
  coverImage: string;
  isChecked: boolean;
  editable: string;
  article: string;
  time: string;
  date: string;
  hour: string;
  sizeCard: 'sm' | 'md';
  typeIcon: types;
}

export const CardItem = ({
  coverImage,
  isChecked,
  editable,
  article,
  time,
  date,
  hour,
  sizeCard,
  typeIcon,
}: CardItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  const [isCheck, setIsCheck] = useState(isChecked);

  const handleCheckboxChange = () => {
    setIsCheck(!isCheck);
  };

  useEffect(() => {
    setIsCheck(isChecked);
  }, [isChecked]);

  const y = IconsTypes.find((x) => x.type === typeIcon);

  return (
    <Box
      w={sizeCard === 'md' ? '232px' : '140px'}
      // w={'232px'}
      height={sizeCard === 'md' ? '364px' : '220px'}
      boxShadow={'0px 3px 6px'}
      color={'bgShadow'}
      borderRadius={'8px'}
      bg={'cdBackground'}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      outline={isCheck ? '3px solid' : ''}
      outlineColor={isCheck ? 'neAccent.500' : ''}
    >
      <Box
        w={'full'}
        height={sizeCard === 'md' ? '213px' : '220px'}
        position={'relative'}
      >
        <Box m={'0.5rem'} position={'absolute'}>
          {/* This is the CheckBox */}
          <CBox
            isHovered={isHovered}
            isCheck={isCheck}
            handleCheckboxChange={handleCheckboxChange}
          />
        </Box>

        <Box
          marginTop={sizeCard === 'md' ? '150px' : '55px'}
          ml={'1rem'}
          textAlign={'center'}
          p={'0.8rem'}
          borderRadius={'112px'}
          zIndex={'docked'}
          position={'absolute'}
          w={sizeCard === 'md' ? '101px' : '48px'}
          h={'44px'}
          bg={'baRoyalBlue.800'}
          color={'white'}
          filter={isCheck ? 'brightness(40%)' : ''}
          display={'inline-flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'2px'}
        >
          <Icon fontSize={'25px'} as={y?.icon} />
          <Text
            display={sizeCard === 'md' ? 'inline-flex' : 'none'}
            w={'80px'}
            h={'16px'}
            m={'0.2rem'}
            fontSize={'smaller'}
          >
            {article}
          </Text>
        </Box>

        {/* This is the Card Image */}
        <ImageCard
          sizeCard={sizeCard}
          coverImage={coverImage}
          isCheck={isCheck}
        />

        <Box
          mt={'10px'}
          w={sizeCard === 'md' ? '202px' : '115px'}
          h={sizeCard === 'md' ? '24px' : '18px'}
          ml={'1rem'}
          mr={'1em'}
          display={'inline-flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          {/* this is the text time */}
          <TextTime sizeCard={sizeCard} time={time} />

          {/* this is the icon next to the text time */}
          <Ico sizeCard={sizeCard} />
        </Box>

        <Box ml={'1rem'}>
          {/* This is the Editable Text */}
          <EditableText sizeCard={sizeCard} editable={editable} />
        </Box>

        <Box
          mx={'1rem'}
          my={sizeCard === 'md' ? '30px' : '6px'}
          //  ml={'1rem'}
          //   mr={'1rem'}
        >
          <TextDate sizeCard={sizeCard} date={date} hour={hour} />
        </Box>
      </Box>
    </Box>
  );
};
