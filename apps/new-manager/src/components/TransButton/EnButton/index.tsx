import { Box, Image } from '@chakra-ui/react';
import React from 'react'; // Asegúrate de importar React
import IconEn from '../../../assets/icons/IconEn.svg';

function EnButton() {
  return (
    <Box w={['30px', '25px']}>
      <Image src={IconEn} alt="Icono en inglés" />
    </Box>
  );
}

export default EnButton;
