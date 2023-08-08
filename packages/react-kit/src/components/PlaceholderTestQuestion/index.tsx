import React, { useState } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { IconCards } from '../../../src/assets/customIcons';
import { IconsTypes, noIcoType, types } from '../../shared/iconsTypes/icons';
import FileHover from '../FileHover';
import { Ico } from '../Ico';

interface Props {
  title: string;
  description: string;
  typeIcon?: types | noIcoType;
  children?: any;
}

export const PlaceholderTestQuestion = (props: Props) => {
  const { description, title, children, typeIcon } = props;

  const [isDragging, setIsDragging] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();

    // Clear the previous timeout if it exists
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }

    // Set a new timeout
    setHoverTimeout(
      setTimeout(() => {
        setIsDragging(false);
        setDragCounter(0); // Reset the counter
      }, 150)
    );
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.items && e.dataTransfer.items[0].kind === 'file') {
      setDragCounter((prev) => prev + 1);
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragCounter((prev) => prev - 1);
    if (dragCounter === 1) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setDragCounter(0); // Reset the counter on drop

    // Clear the timeout on drop as well
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }

    // Process the file if needed here
  };

  return (
    <Box
      w="full"
      height="calc(100vh - 340px)"
      borderRadius={'8px'}
      bg={'compBackgroundFilled'}
      display="flex"
      justifyContent={'center'}
      alignItems="center"
      flexDir="column"
      color={'txTertiary'}
      border="2px dashed"
      borderColor="blackAlpha.100"
      _dark={{
        color: 'neWhite.500',
      }}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragging ? (
        <FileHover typeBorder="medium" typeSize="imageSelector" />
      ) : (
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          marginTop="25px"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            width="96px"
            height="96px"
            rounded="full"
            bg="txHighlight"
          >
            <Ico sizeName="xl" color="white" icon={IconCards} />
          </Flex>

          <Heading
            marginTop="15px"
            letterSpacing="-0.75px"
            color="txHighlight"
            fontWeight="bold"
            fontSize="30px"
          >
            {title}
          </Heading>

          <Text
            marginTop="10px"
            letterSpacing="0px"
            fontWeight="normal"
            fontSize="14px"
            color="text"
          >
            {description}
          </Text>
        </Flex>
      )}
    </Box>
  );
};
