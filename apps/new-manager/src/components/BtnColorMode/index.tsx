import { BsFillLightningChargeFill } from 'react-icons/bs';
import { useColorMode } from '@chakra-ui/react';
import { MdDarkMode } from 'react-icons/md';
import { ButtonIco } from '@iseazy/react-kit';

const BtnColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ButtonIco
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? MdDarkMode : BsFillLightningChargeFill}
      sizeName={'md'}
      aria-label={''}
    />
  );
};

export default BtnColorMode;
