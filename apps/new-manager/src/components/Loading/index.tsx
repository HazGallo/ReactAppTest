import { Center, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Center height="100vh">
      <Spinner size="xl" color="blue.500" />
    </Center>
  );
}

export default Loading;
