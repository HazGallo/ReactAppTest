import { BsFillLightningChargeFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { Box, useColorMode } from '@chakra-ui/react';
import { ButtonIco, Switch } from '@iseazy/react-kit';
import { useState } from 'react';

export const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  console.log(colorMode);

  return (
   <Box>
     <Switch
      sizes={'md'}
      iconOf={"IconAtom"}
      iconOn={"IconPlaylist"}
      checked={colorMode === 'dark' ? true : false}
      onClick={toggleColorMode}
    />
   </Box>
  );
};
