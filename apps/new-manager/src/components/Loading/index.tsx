import { Center, Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Center height="100vh">
      <div className="loading-container">
        <Spinner
          size="xl"
          color="blue.500"
          thickness="4px"
          emptyColor="gray.200"
        />
        <div className="loading-overlay"></div>
      </div>
    </Center>
  );
};

export default Loading;
