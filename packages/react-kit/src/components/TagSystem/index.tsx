import { useEffect, useRef, useState } from 'react';

import { Box, Input, SimpleGrid } from '@chakra-ui/react';

import { DropdownMenu } from '../DropdownMenu';
import { Tag } from '../Tag';

interface ITag {
  id: number;
  text: string;
  isRecommended?: boolean;
}

interface ITitle {
  title: string;
  isMenuItem?: boolean;
}

interface Props {
  isDisabled?: boolean;
  type: 'menu' | 'writting';
  warning: boolean;
}

export const TagSystem = (props: Props) => {
  const { isDisabled, type, warning } = props;

  const [tags, setTags] = useState<ITag[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [clickedInput, setClickedInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [recommendedTags, setRecommendedTags] = useState<ITag[]>([
    { id: 1, text: 'Label1', isRecommended: true },
    { id: 2, text: 'Label2', isRecommended: true },
    { id: 3, text: 'Label3', isRecommended: true },
  ]);

  const originalTitles = [
    {
      title: 'Dropdown option1',
      categoryTitle: 'Category1',
      isMenuItem: true,
    },
    {
      title: 'Dropdown option2',
      categoryTitle: 'Category1',
      isMenuItem: true,
    },
    {
      title: 'Dropdown option3',
      categoryTitle: 'Category1',
      isMenuItem: true,
    },
    {
      title: 'Dropdown option4',
      categoryTitle: 'Category2',
      isMenuItem: true,
    },
    {
      title: 'Dropdown option5',
      categoryTitle: 'Category2',
      isMenuItem: true,
    },
    {
      title: 'Dropdown option6',
      categoryTitle: 'Category2',
      isMenuItem: true,
    },
  ];

  const [arrayTitle, setArrayTitle] = useState<ITitle[]>(originalTitles);

  const handleInputClick = () => {
    setClickedInput(true);
    setIsOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isDisabled) {
      if (event.key === 'Enter' && inputValue) {
        setIsOpen(false);
        const isDuplicate = tags.some((tag) => tag.text === inputValue);
        if (!isDuplicate) {
          setTags([...tags, { id: Date.now(), text: inputValue }]);
        }
        setInputValue('');
      }
    }
  };

  const handleTagRemove = (tagId: number) => {
    if (!isDisabled) {
      const removedTag = tags.find((tag) => tag.id === tagId);
      if (removedTag === undefined) {
        return;
      }
      if (removedTag.isRecommended) {
        setRecommendedTags([...recommendedTags, removedTag]);
      }
      const updatedTags = tags.filter((tag) => tag.id !== tagId);
      setTags(updatedTags);

      const originalTitle = originalTitles.find(
        (item) => item.title === removedTag.text
      );

      if (originalTitle !== undefined) {
        const updatedArrayTitle = [
          ...arrayTitle,
          {
            title: originalTitle.title,
            isMenuItem: originalTitle.isMenuItem,
            ...(originalTitle.categoryTitle && {
              categoryTitle: originalTitle.categoryTitle,
            }),
          },
        ];
        setArrayTitle(updatedArrayTitle);
      }
    }
  };

  const handleRecommendedTagClick = (tag: ITag) => {
    if (!isDisabled) {
      setTags([...tags, tag]);
      setRecommendedTags(recommendedTags.filter((t) => t.id !== tag.id));
    }
  };

  const handleMenuSelect = (value: string) => {
    if (!isDisabled) {
      setSelectedValue(value);
      const isDuplicate = tags.some((tag) => tag.text === value);
      if (!isDuplicate) {
        const newTag = { id: Date.now(), text: value };
        setTags([...tags, newTag]);
        const updatedArrayTitle = arrayTitle.filter(
          (item) => item.title !== value
        );
        setArrayTitle(updatedArrayTitle);
      }
      setIsOpen(false);
      setClickedInput(false);
    }
  };

  const dropmenuRef = useRef<any>(null);
  useEffect(() => {
    const handleClick = (event: any) => {
      if (
        dropmenuRef.current &&
        !dropmenuRef?.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [dropmenuRef]);

  return (
    <Box w="364px" ref={dropmenuRef}>
      <SimpleGrid
        padding="14px"
        w="full"
        bg={isDisabled ? 'blackAlpha.50' : 'baGreyTagSystem'}
        _dark={{
          bg: isDisabled ? 'whiteAlpha.200' : 'whiteAlpha.200',
        }}
        _hover={{
          background: isDisabled ? 'blackAlpha.50' : 'blackAlpha.200',
          _dark: {
            background: isDisabled ? '' : 'whiteAlpha.300',
          },
        }}
        display="flex"
        flexWrap="wrap"
        borderRadius="8px"
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        gap={3}
      >
        {tags.map((tag) => (
          <Tag
            isDisabled={isDisabled}
            key={tag?.id}
            label={tag?.text}
            typeVersion="remove"
            onClick={() => handleTagRemove(tag.id)}
          />
        ))}

        <Input
          sx={{
            cursor: isDisabled ? 'not-allowed' : 'pointer',
          }}
          isDisabled={isDisabled}
          borderColor="transparent"
          bg="transparent"
          fontSize="16px"
          h="36px"
          color={'txPrimary'}
          placeholder="Add"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onClick={handleInputClick}
          focusBorderColor="transparent"
          _hover={{
            focusBorderColor: 'transparent',
          }}
          minWidth="80px"
          flex="1"
        />
      </SimpleGrid>
      {type === 'menu' && (
        <DropdownMenu
          dataMenu={arrayTitle}
          isOpen={isOpen}
          positioning="center"
          position="absolute"
          mt="10px"
          typeVersion="add"
          iconTypes={'IconGhost'}
          onSelect={handleMenuSelect}
          warning={warning}
          categoryType="withCategory"
          typeMenu={'dropdownMenuOption'}
        />
      )}

      <SimpleGrid
        columns={3}
        mt="15px"
        w="100%"
        spacing="5px"
        display="flex"
        alignItems="flex-start"
      >
        {recommendedTags.map((tag) => (
          <Tag
            isDisabled={isDisabled}
            typeVersion="add"
            key={tag.id}
            label={tag.text}
            onClick={() => {
              handleRecommendedTagClick({ ...tag, isRecommended: true });
            }}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
