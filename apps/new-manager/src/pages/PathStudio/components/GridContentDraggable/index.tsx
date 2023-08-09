import { Box, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  move,
  swap,
} from 'react-grid-dnd';
import { shallow } from 'zustand/shallow';

import { useSettings } from '../../../../../src/store/settingsStore';
import DrawerParent from '../DrawerParent/DrawerParent';
import GridCards from '../GridCards';

interface Props {
  data: any;
  isError: boolean;
}

const GridContentDraggable = ({ data }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [adaptedSizeSm] = useMediaQuery('(max-width: 768px)');
  const [card, setCard] = useState<any>([]);
  const [column, setColumn] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [row, setRow] = useState(2);
  const ref = useRef<HTMLDivElement>(null);
  const [customCardWidth, setCustomCardWidth] = useState<number>(232); // Ancho inicial de la tarjeta
  const [customCardHeight, setCustomCardHeight] = useState<number>(364); // Alto inicial de la tarjeta
  const [intersect, setIntersect] = useState<number>(0); // Nuevo estado para almacenar el valor de intersección

  const { cardSize } = useSettings(
    (state) => ({ cardSize: state.cardSize }),
    shallow
  );

  function onChange(
    sourceId: string,
    sourceIndex: number,
    targetIndex: number,
    targetId?: string
  ) {
    if (targetId) {
      const result = move(
        card[sourceId],
        card[targetId],
        sourceIndex,
        targetIndex
      );
      return setCard({
        ...card,
        [sourceId]: result[0],
        [targetId]: result[1],
      });
    } else if (card?.length > 0) {
      const nextState = swap(card, sourceIndex, targetIndex);
      setCard(nextState);
      setIsDragging(true);
    }
  }

  function onDragEnd() {
    setIsDragging(false);
  }

  useEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (customCardWidth > 800) return;
    if (customCardHeight > 800 || customCardHeight === 0 || !customCardHeight)
      return;

    const observer = new ResizeObserver(() => {
      const gap = 20;

      // Utilizar el nuevo valor personalizado para el ancho de la tarjeta
      const cardWidth = customCardWidth + gap || intersect + gap;
      setColumn(Math.trunc(element.offsetWidth / cardWidth));

      // Utilizar el nuevo valor personalizado para el alto de la tarjeta
      const cardHeight = customCardHeight + gap;
      setRow(Math.trunc(cardHeight));

      if (isDragging) {
        setIsDragging(false);
      }
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [
    customCardWidth,
    customCardHeight,
    intersect,
    isDragging,
    data,
    cardSize,
  ]);

  //TODO: I think we can do the same without useEffect. But I'm tired!
  useEffect(() => {
    console.log('executing');
    const updatedCard: any[] = card.map((existingItem: any) => {
      const newItem = data.find((item: any) => item.uid === existingItem.uid);
      return newItem ? { ...existingItem, ...newItem } : existingItem;
    });

    const newItems: any[] = data.filter(
      (newItem: any) => !card.some((item: any) => item.uid === newItem.uid)
    );
    const updatedCardWithNewItems: any[] = [...updatedCard, ...newItems];

    setCard(updatedCardWithNewItems);
  }, [data]);

  const cardHeight = cardSize ? 364 : 220;
  const columnCount = Math.ceil(card.length / column);
  const totalHeight = (cardHeight + 20) * columnCount;

  useEffect(() => {
    if (cardSize) {
      setCustomCardWidth(220);
      setCustomCardHeight(364);
    } else {
      setCustomCardWidth(160);
      setCustomCardHeight(220);
    }
  }, [intersect, data, cardSize]);

  return (
    <Box h="100%">
      <DrawerParent
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        type={'InteractiveForm'}
      />

      <GridContextProvider onChange={onChange}>
        <Box ref={ref} w="100%" h="100%">
          <GridDropZone
            boxesPerRow={column === 1 ? 2 : column}
            id="Card"
            onDragEnd={onDragEnd}
            rowHeight={row}
            style={{ minHeight: totalHeight }}
          >
            {card.map((item: any) => (
              <GridItem key={item.uid}>
                <GridCards
                  height={totalHeight}
                  {...item}
                  isDragging={isDragging}
                  isOpen={isOpen}
                  onClose={onClose}
                  onOpen={onOpen}
                  setIsDragging={setIsDragging}
                  translations={item.translations}
                />
              </GridItem>
            ))}
          </GridDropZone>
        </Box>
      </GridContextProvider>
    </Box>
  );
};

export default GridContentDraggable;
