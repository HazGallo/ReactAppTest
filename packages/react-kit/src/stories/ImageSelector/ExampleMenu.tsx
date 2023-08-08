import React, { useState } from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem, Box } from '@chakra-ui/react';

export const ItemGroup = () => {
  const [isSubMenu1Open, setIsSubMenu1Open] = useState(false);
  const [isSubMenu3Open, setIsSubMenu3Open] = useState(false);

  const handleSubMenu1Toggle = () => {
    setIsSubMenu1Open(!isSubMenu1Open);
  };

  const handleSubMenu3Toggle = () => {
    setIsSubMenu3Open(!isSubMenu3Open);
  };

  return (
    <Box mt="80px">
        <Menu>
      <MenuButton as={Button} colorScheme="teal">
        Opciones
      </MenuButton>
      <MenuList>
        <MenuItem >Opción 1</MenuItem>
      
          <Menu>
            <MenuButton as={Button} width="20px" colorScheme="teal" ml="200px">
              ...
            </MenuButton>
            <MenuList>
              <MenuItem>Subopción 1.1</MenuItem>
              <MenuItem>Subopción 1.2</MenuItem>
              <MenuItem>Subopción 1.3</MenuItem>
            </MenuList>
          </Menu>
    
        <MenuItem>Opción 2</MenuItem>
        <MenuItem >Opción 3</MenuItem>
       
      </MenuList>
    </Menu>
    </Box>
  );
};