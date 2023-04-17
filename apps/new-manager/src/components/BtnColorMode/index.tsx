import { Button, useColorMode } from '@chakra-ui/react';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';

const BtnColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? <MdDarkMode /> : <BsFillLightningChargeFill />}
    </Button>
  );
};

export default BtnColorMode