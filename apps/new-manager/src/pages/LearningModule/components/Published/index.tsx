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

import { badgeTypes } from './types/BadgeTypeBg';
import { shallow } from 'zustand/shallow';

export const Published = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [dataSectionSelected, setdataSectionSelected] = useState<any>();
  const [inputValue, setInputValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [showComponentState, setShowComponentState] = useState(false); // Nuevo estado
  const [showTable, setShowTable] = useState(false);

  const { handleSizeCardMd, handleSizeCardSm, cardSize } = useSettings();

  console.log({ dataSectionSelected });

  const {
    addElement,
    createSection,
    IdSectionSelected,
    modifySection,
    modifySections,
    moveSection,
    sectionContents,
    sections,
    updateSectionName,
  } = useSectionsStore(
    (state) => ({
      addElement: state.addElement,
      createSection: state.createSection,
      IdSectionSelected: state.IdSectionSelected,
      modifySection: state.modifySection,
      modifySections: state.modifySections,
      moveSection: state.moveSection,
      sectionContents: state.sectionContents,
      sections: state.sections,
      updateSectionName: state.updateSectionName,
    }),
    shallow
  );

  // we have a big problem here... we need merge sections and sectionsContenst
  const currentSectionContents = sectionContents.find(
    ({ idSection }) => idSection === IdSectionSelected
  );

  const currentSection = sections.find(({ id }) => id === IdSectionSelected);

  console.log({ currentSection, IdSectionSelected });

  const generateAvatars = (contents: any) => {
    let avatar: any = [];

    contents.forEach((element: any) => {
      const bg = badgeTypes.find((x) => x.type === element.type);
      avatar.unshift({
        name: element.id,
        src: element.coverImage,
        backgroundColor: bg?.bg,
      });
    });

    return avatar;
  };

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

  const onSeletedChange = (title: any, sectionId: string) => {
    const actions: { [key: string]: Function } = {
      'Move to top': () => moveSection(sectionId, 'top'),
      'Move to bottom': () => moveSection(sectionId, 'bottom'),
      'Move up': () => moveSection(sectionId, 'up'),
      'Move down': () => moveSection(sectionId, 'down'),
      Translate: () => onOpen(),
    };

    const action = actions[title];
    if (action) {
      action();
    }
  };

  const variants = {
    hidden: { opacity: 0, y: '10%' },
    visible: { opacity: 1, y: '0%' },
  };

  useEffect(() => {
    if (showComponent) {
      setTimeout(() => {
        setShowComponentState(true);
      }, 200);
    } else {
      setShowComponentState(false);
    }
  }, [showComponent]);

  const onSelected = (title: string) => {
    const dataSection = modifySection(IdSectionSelected);
  };

  const [processedIds, setProcessedIds] = useState<string[]>([]);

  // Usar useMemo para evitar operaciones costosas en cada renderizado
  const shouldFetch = useMemo(
    () => IdSectionSelected && !processedIds.includes(IdSectionSelected),
    [IdSectionSelected, processedIds]
  );

  const { data, error, isLoading } = usePathList(
    shouldFetch ? IdSectionSelected : null
  );

  console.log(data, 'data');

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
        paddingTop="130px"
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
          title={"Published"}
          areaSection={false}
          titleHeader={"Learning"}
        />

        {isLoading ? (
          <Box>..IsLoading</Box>
        ) : (
          <GridContentDraggable isError={false} data={data ? data : []} />
        )}

        {/* <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4 }}
          >
            {!data ? (
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
                    onSeletedChange={onSelected}
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
                  <TableDataCard dataCard={currentSectionContents?.elements} />
                ) : (
                  <GridContentDraggable
                  data={data}
                  isError={false}
                />
                )}
              </motion.div>
            )}
          </motion.div> */}
      </Box>
    </Flex>
  );
};
