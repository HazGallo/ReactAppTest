import { Box, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from 'react-grid-dnd';

import GridCards from '../GridCards';
import { DrawerParent } from '../DrawerParent/DrawerParent';
import { useSettings } from '../../store/settingsStore';

interface Props {
  data: any;
  isError: boolean;
}

const GridContentDraggable = ({ data, isError }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [card, setCard] = useState<any>([]);
  const [row, setRow] = useState(2);
  const [column, setColumn] = useState(2);

  const [isDragging, setIsDragging] = useState(false);
  const [adaptedSizeSm] = useMediaQuery('(max-width: 768px)');
  const ref = useRef<HTMLDivElement>(null);

  const { cardSize } = useSettings(
    (state) => ({ cardSize: state.cardSize }),
    shallow
  );
  const memoizedCard = useMemo(() => card, [card]);

  function onChange(
    sourceId: string,
    sourceIndex: number,
    targetIndex: number
  ) {
    if (card?.length > 0) {
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

    const observer = new ResizeObserver(() => {
      const gap = 20;

      const sizeWidth = element.offsetWidth;
      const cardWidthMd = 232 + gap;
      const cardWidthSm = 140 + gap;
      const cardWidth = cardSize ? cardWidthMd : cardWidthSm;
      setColumn(Math.trunc(sizeWidth / cardWidth));

      const cardHeightMd = 364 + gap;
      const cardHeightSm = 220 + gap;
      const cardHeight = adaptedSizeSm
        ? cardHeightSm
        : cardSize
        ? cardHeightMd
        : cardHeightSm;
      setRow(Math.trunc(cardHeight));

      if (isDragging) {
        setIsDragging(false);
      }
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [column, row, cardSize, adaptedSizeSm, isDragging, data]);

  useEffect(() => {
    if (data) {
      setCard(data);
    }
  }, [data]);

  // Manejar el caso en el que no hay datos disponibles
  if (isError || !data || data.length === 0) {
    return <div>Loading...</div>;
  }

  console.log({data});

  return (
    <Box>
      {isOpen && (
        <DrawerParent isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      )}

      <GridContextProvider onChange={onChange}>
        <Box ref={ref} w="100%" h="100%">
          <GridDropZone
            id="Card"
            boxesPerRow={column === 1 ? 2 : column}
            rowHeight={row}
            style={{ minHeight: 100 * Math.ceil(card.length / 1) }}
            onDragEnd={onDragEnd}
          >
            {card.map((item: any) => (
              <GridItem key={item.uid}>
                <GridCards
                  {...item}
                  isDragging={isDragging}
                  setIsDragging={setIsDragging}
                  onOpen={onOpen}
                  onClose={onClose}
                  isOpen={isOpen}
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
