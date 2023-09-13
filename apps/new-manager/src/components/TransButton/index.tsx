import { Box, Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@chakra-ui/react';
import EnButton from './EnButton';
import EsButton from './EsButton';

export const TransButton = () => {
  const [t, i18n] = useTranslation('global');

  // Función para cambiar el idioma y guardar en localStorage
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('selectedLanguage', language);
  };

  useEffect(() => {
    // Recuperar el idioma seleccionado desde localStorage cuando se carga el componente
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      changeLanguage(selectedLanguage);
    }
  }, []);

  return (
    <Box mt={'5px'} display={'flex'} gap={'5px'} ml={['60%', '80%']}>
      <Button
        _hover={{ transform: 'translateY(-5px)', background: 'transparent' }}
        bg={'transparent'}
        onClick={() => changeLanguage('es')}
      >
        <EsButton />
      </Button>

      <Button
        _hover={{ transform: 'translateY(-5px)', background: 'transparent' }}
        bg={'transparent'}
        onClick={() => changeLanguage('en')}
      >
        <EnButton />
      </Button>
    </Box>
  );
};
