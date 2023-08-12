import { lazy, useCallback, useEffect, useMemo, useState } from 'react';

import {
  AbsoluteCenter,
  Box,
  Divider,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { PlaceholderArea } from '@iseazy/react-kit';

import { Headboard } from '../../../Headboard';
import { ButtonMenu } from '../../../Headboard/components/ButtonMenu';
import { dataMenu } from '../../../Headboard/data/dataMenu';
import { scrollContents } from './types/scrollContents.type';

import { useSettings } from 'src/store/settingsStore';
import useSectionsStore from 'src/store/useSectionsStore';
import usePathListStore from 'src/store/usePathListStore';

import { motion } from 'framer-motion';
import { animated, config, useTransition } from 'react-spring';
import { getRandomObject } from 'src/data/dataCard';
import { Element } from 'src/store/interfaces/element.interface';
import { v4 as uuidv4 } from 'uuid';
import { usePathList } from '../../hooks/usePathList';

// Adding lazy import for GridContentDraggable
const GridContentDraggable = lazy(() => import('../GridContentDraggable'));

// Adding lazy import for TableDataCard
const TableDataCard = lazy(
  () => import('../../../PathStudio/components/TableDataCard')
);

export const Published = () => {
  const { dataPath } = usePathListStore();

  const [showComponent, setShowComponent] = useState(false);
  const [showComponentState, setShowComponentState] = useState(false); // Nuevo estado
  const [showTable, setShowTable] = useState(false);

  const { handleSizeCardMd, handleSizeCardSm, cardSize } = useSettings();

  const handleButtonTable = useCallback(() => {
    setShowTable(true);
  }, []);

  const handleButtonCardSm = useCallback(() => {
    handleSizeCardSm();
    setShowTable(false);
  }, [handleSizeCardSm]);

  const handleButtonCardMd = useCallback(() => {
    handleSizeCardMd();
    setShowTable(false);
  }, [handleSizeCardMd]);

  useEffect(() => {
    if (showComponent) {
      setTimeout(() => {
        setShowComponentState(true);
      }, 200);
    } else {
      setShowComponentState(false);
    }
  }, [showComponent]);

  const variants = {
    hidden: { opacity: 0, y: '10%' },
    visible: { opacity: 1, y: '0%' },
  };

  return (
    <Flex
      justifyContent="center"
      alignItems={'center'}
      width={'100%'}
      pl="5%"
      h="100vh"
    >
      <Box
        h="100%"
        paddingTop="131px"
        position={'relative'}
        id="scrollSection"
        overflowY={'auto'}
        sx={{ ...scrollContents }}
        overflowX="hidden"
        pr="5%"
        transition="all .3s ease-in-out"
        w="100%"
      >
        <Headboard
          buttonOne={!showTable && cardSize}
          buttonShow={showComponent}
          buttonThree={showTable}
          buttonTwo={!showTable && !cardSize}
          handleButtonCardMd={handleButtonCardMd}
          handleButtonCardSm={handleButtonCardSm}
          handleButtonTable={handleButtonTable}
          title={'Published'}
          areaSection={false}
          titleHeader={'Learning'}
        />


        <Box >
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4 }}
          >
            {!dataPath ? (
              <motion.div
                initial={{ y: '5%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PlaceholderArea
                  title="Add new contents to the section"
                  description={`Create new cards through the "new button"!`}
                  typeIcon="IconArticle"
                >
                  <ButtonMenu
                    categoryType="noCategory"
                    dataMenu={dataMenu}
                    isOpen={false}
                    isScrolled={false}
                   // onSeletedChange={onSelected}
                    positioning="top"
                    warning={false}
                  />
                </PlaceholderArea>
              </motion.div>
            ) : (
              <motion.div
                initial={{ y: '5%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {showTable ? (
                  //<TableDataCard dataCard={dataPath} />
                  <></>
                ) : (
                  <GridContentDraggable isError={false} data={dataPath} />

                )}
              </motion.div>
            )}
          </motion.div>
        </Box>
      </Box>
    </Flex>
  );
};
