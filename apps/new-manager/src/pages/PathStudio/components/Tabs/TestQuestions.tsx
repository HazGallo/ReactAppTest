import { Box, Flex } from '@chakra-ui/react';
import { CardQuestion, PlaceholderTestQuestion } from '@iseazy/react-kit';
import { Headboard } from '../Headboard';

const TestQuestions = () => {
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
          buttonOne={true}
          buttonShow={true}
          buttonThree={false}
          buttonTwo={false}
          handleButtonCardMd={() => {}}
          handleButtonCardSm={() => {}}
          handleButtonItemGroup={() => {}}
          handleButtonTable={() => {}}
          idSection={'IdSectionSelected'}
          subTitle={'All Topics'}
          title="Test Questions"
        />

        <PlaceholderTestQuestion
          title=" Drop your questions here!"
          description="or search in your device"
          // reset={true} //para resetear el state y volverlo a su estado inicial
          // onExcelDataProcessed={(data) => {
          //   console.log(data); // Aquí puedes acceder a los datos de Excel desde fuera.
          // }}
        />
      </Box>
    </Flex>
  );
};

export default TestQuestions;
