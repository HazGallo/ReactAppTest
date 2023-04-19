import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from 'react-grid-dnd';
import { DataCard } from '../../data/dataCard';
import { Box, useMediaQuery } from '@chakra-ui/react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { sliceInformation } from '../../store/sliceInformation';
import { useEffect, useRef, useState } from 'react';
import GridCards from '../GridCards';

const DrapAndDrop = () => {

  const { cardSize } = sliceInformation();
  const [card, setCard] = useState(DataCard);
  function onChange(
    sourceId: string,
    sourceIndex: number,
    targetIndex: number
  ) {
    const nextState = swap(card, sourceIndex, targetIndex);
    setCard(nextState);
  }

  const [adaptedSizeSm] = useMediaQuery('(max-width: 768px)');
  const [column, setColumn] = useState(2);
  const [row, setRow] = useState(2);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref?.current;

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

    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [column, row, cardSize, adaptedSizeSm]);

  return (
    <GridContextProvider onChange={onChange}>
      <Box ref={ref} w="100%" h="100%">
        <GridDropZone
          id="Card"
          boxesPerRow={column == 1 ? 2 : column}
          rowHeight={row}
          style={{ minHeight: 100 * Math.ceil(card.length / 1) }}
        >
          {card.map((item) => (
            <GridItem key={item.id}>
              <GridCards {...item} />
            </GridItem>
          ))}
        </GridDropZone>
      </Box>
    </GridContextProvider>
  );
};

export default DrapAndDrop;
