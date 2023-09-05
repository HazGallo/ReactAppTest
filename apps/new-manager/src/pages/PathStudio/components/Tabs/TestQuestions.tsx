import { Box, Flex } from '@chakra-ui/react';
import { PlaceholderTestQuestion } from '@iseazy/react-kit';
import { useCallback, useEffect, useState } from 'react';
import { useSettings } from 'src/store/settingsStore';
import { Headboard } from '../../../Headboard';
import GridContentDraggable from '../GridContentDraggable';
import elementsData from './data/dataCardQuestions';
import { motion } from 'framer-motion';

const TestQuestions = () => {
  const [dataIsValid, setDataIsValid] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const { handleSizeCardMd, handleSizeCardSm, cardSize } = useSettings();

  const handleButtonCardSm = useCallback(() => {
    handleSizeCardSm();
  }, [handleSizeCardSm]);

  const handleButtonCardMd = useCallback(() => {
    handleSizeCardMd();
  }, [handleSizeCardMd]);

  useEffect(() => {
    if (dataIsValid) {
      const timer = setTimeout(() => {
        setShowPlaceholder(false);
      }, 6200);

      // Limpieza: Si el componente se desmonta antes del tiempo, limpiar el timer para evitar errores.
      return () => clearTimeout(timer);
    }
  }, [dataIsValid]);

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
        overflowX="hidden"
        pr="5%"
        transition="all .3s ease-in-out"
        w="100%"
      >
        <Headboard
          buttonOne={cardSize}
          buttonShow={false}
          buttonThree={false}
          buttonTwo={!cardSize}
          handleButtonCardMd={handleButtonCardMd}
          handleButtonCardSm={handleButtonCardSm}
          handleButtonItemGroup={() => {}}
          handleButtonTable={() => {}}
          idSection={'IdSectionSelected'}
          subTitle={'All Topics'}
          title="Test Questions"
          contentImport={true}
          counter={dataIsValid ? elementsData.length : 0}
        />
        {showPlaceholder ? (
          <PlaceholderTestQuestion
            title=" Drop your questions here!"
            description="or search in your device"
            onExcelDataProcessed={(data) => {
              if (data) setDataIsValid(true);
            }}
          />
        ) : (
          <motion.div
            initial={{ y: '5%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GridContentDraggable
              typeCard="cardQuestion"
              isError={false}
              data={elementsData}
            />
          </motion.div>
        )}
      </Box>
    </Flex>
  );
};

export default TestQuestions;
