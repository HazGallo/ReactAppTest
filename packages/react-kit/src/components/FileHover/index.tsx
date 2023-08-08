import { Box, Divider, Flex, Text, useMediaQuery } from '@chakra-ui/react';

import Lottie from 'react-lottie-player';
import fileLoader from './animation/fileLoader.json';

interface Props {
  typeBorder?: 'complete' | 'medium';
  typeSize: 'fileDropper' | 'imageSelector';
}

const FileHover = (props: Props) => {
  const { typeBorder = 'medium', typeSize } = props;

  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [isSmallScreenSm] = useMediaQuery('(max-width: 520px)');

  return (
    <Flex
      minHeight={typeSize === 'fileDropper' ? '80px' : '100%'}
      width={typeSize === 'fileDropper' ? '364px' : '100%'}
      borderRadius={typeBorder === 'medium' ? '8px' : '100px'}
      border="2px"
      borderStyle="dashed"
      borderColor="compBorderError"
      bg="bgFileHover"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box>
        <Lottie
          speed={1}
          loop
          animationData={fileLoader}
          play
          style={{
            width:
              typeSize === 'fileDropper'
                ? '60px'
                : isSmallScreen
                ? '60px'
                : '145px',
            height:
              typeSize === 'fileDropper'
                ? '26px'
                : isSmallScreen
                ? '20px'
                : '64px',
            background: 'transparent',
          }}
        />
      </Box>

      <Divider
        color="borderFileHover"
        width={
          typeSize === 'fileDropper'
            ? '75px'
            : isSmallScreenSm
            ? '30px'
            : isSmallScreen
            ? '60px'
            : '146px'
        }
        marginTop="1px"
      />

      <Text
        textStyle={
          typeSize === 'fileDropper' ? 'xs' : isSmallScreen ? 'xs' : 'md'
        }
        color="txHighlight"
        marginTop="5px"
        fontWeight="medium"
      >
        I'm dropping it
      </Text>
    </Flex>
  );
};

export default FileHover;
