import { Box, Flex, SimpleGrid, Spacer } from '@chakra-ui/react';
import { CardItem, ItemGroup, ItemGroupHover } from '@iseazy/react-kit';
import { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  move,
  swap,
} from 'react-grid-dnd';
import { DataCard } from '../../../../data/dataCard';

export interface Element {
  id?: string;
  placeholderSrc: string;
  type: any;
  checked: boolean;
  sizeCard: 'md';
  text: string;
  typeStatus: any;
  coverimage: string;
}

export const Test = () => {
  const [elements, setElements] = useState<
    | {
        general: Element[];
        section1: Element[];
        section2: Element[];
        section3: Element[];
        section4: Element[];
      }
    | any
  >({
    general: DataCard,
    section1: [],
    section2: [],
    section3: [],
    section4: [],
  });

  const [sections, setSections] = useState<string[]>([
    'section1',
    'section2',
    'section3',
    'section4',
  ]);

  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    console.log(elements);
  }, [elements]);

  function onChange(
    sourceId: string,
    sourceIndex: number,
    targetIndex: number,
    targetId: any
  ): void {
    setIsDragging(false); // Set isDragging to false when the change starts

    if (targetId) {
      const result = move(
        elements[sourceId],
        elements[targetId],
        sourceIndex,
        targetIndex
      );

      return setElements({
        ...elements,
        [sourceId]: result[0],
        [targetId]: result[1],
      });
    }

    const result = swap(elements[sourceId], sourceIndex, targetIndex);
    return setElements({
      ...elements,
      [sourceId]: result,
    });
  }

  function onDragEnd(result: DropResult): void {
    if (!result.destination) {
      setIsDragging(false);
      return;
    }

    const elementsCopy = Array.from(sections);
    const [reorderedElement] = elementsCopy.splice(result.source.index, 1);
    elementsCopy.splice(result.destination.index, 0, reorderedElement);

    setSections(elementsCopy);
    setIsDragging(false);
  }

  let clickTimer: NodeJS.Timeout;

  const handleElementMouseDown = (element: Element): void => {
    clickTimer = setTimeout(() => {
      setIsDragging(true); // Long press detected, start dragging
      console.log('Long press detected on element:', element);
    }, 100); // Shorter timeout value
  };

  const handleElementMouseUp = (): void => {
    clearTimeout(clickTimer);
    setIsDragging(false);
  };

  const generateAvatars = (contents: any) => {
    let avatar: any = [];

    contents.forEach((element: any) => {
      avatar.unshift({ name: element.id, src: element.coverimage });
    });

    return avatar;
  };

  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  const getSectionData = (sectionName: any) => {
    // Retorna los datos correspondientes a la sección indicada por 'sectionName'
    return elements[sectionName];
  };

  console.log(isDragging);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <GridContextProvider onChange={onChange}>
        <Flex direction={{ base: 'column', md: 'row' }} padding={5} mt="120px">
          <Box>
            <Droppable droppableId="sections">
              {(provided) => (
                <SimpleGrid
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  row={{ base: 1, md: 3 }}
                  spacing={10}
                  width="200px"
                >
                  {sections.map((section, index) => (
                    <Draggable
                      key={section}
                      draggableId={section}
                      index={index}
                    >
                      {(provided) => (
                        <Box
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          flexDir="column"
                          mb="20px"
                        >
                          <Box w="200px" ml="200px">
                            <Box>
                              <GridDropZone
                                id={section}
                                boxesPerRow={10}
                                rowHeight={200}
                              >
                                <></>
                                <ItemGroup
                                  key={index}
                                  isSelected={false}
                                  isDisabled={false}
                                  avatars={generateAvatars(
                                    getSectionData(section)
                                  )}
                                  placeholder={'New section'}
                                  src={''}
                                  BadgeGroupColor={'lkOrange.500'}
                                  valueHeading={section}
                                  readonly={false}
                                  amount={getSectionData(section).length}
                                  setValueHeading={() => {}}
                                  isDragging={
                                    isDragging && section === activeSectionId
                                      ? true
                                      : false
                                  }
                                  isDraggingItems={isDragging}
                                  onMouseEnter={() => {
                                    console.log('> onMouseEnter');
                                    setActiveSectionId(section);
                                  }}
                                  onMouseLeave={() => {
                                    console.log('> onMouseLeave');
                                    setActiveSectionId(null);
                                  }}
                                />
                              </GridDropZone>
                            </Box>
                          </Box>
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </SimpleGrid>
              )}
            </Droppable>
          </Box>

          <Spacer />

          <Box flex={1}>
            <h2>General</h2>
            <GridDropZone id="general" boxesPerRow={4} rowHeight={260}>
              {elements.general.map((element: Element) => (
                <GridItem key={element.id}>
                  <Box
                    onMouseDown={() => handleElementMouseDown(element)}
                    onMouseUp={handleElementMouseUp}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    userSelect="none"
                    width="100%"
                    padding="0.6rem"
                  >
                    <CardItem
                      width="inherit"
                      placeholderSrc={element.placeholderSrc}
                      coverImage={element.coverimage}
                      checked={element.checked}
                      sizeCard={'sm'}
                      typeStatus={element.typeStatus}
                      typeBadge={element.type}
                      InfoAndActionBar={element.text}
                      editableTitle={element.text}
                      placeholder="title"
                      date="april 10, 2002 03:24:00"
                      errorMessage={'Error Message'}
                      hasError={false}
                      readOnly={false}
                    />
                  </Box>
                </GridItem>
              ))}
            </GridDropZone>
          </Box>
        </Flex>
      </GridContextProvider>
    </DragDropContext>
  );
};
