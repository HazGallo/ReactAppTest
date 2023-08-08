import { IconButton } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { shallow } from 'zustand/shallow';

import { useSettings } from '../../../../store/settingsStore';

const BtnMenu = () => {
  const { changeNavSize, navSize } = useSettings(
    (state) => ({ changeNavSize: state.changeNavSize, navSize: state.navSize }),
    shallow
  );

  const toggleNavSize = () => {
    const newNavSize = navSize === 'small' ? 'large' : 'small';
    changeNavSize(newNavSize);
  };

  return (
    <IconButton
      background="none"
      icon={<FiMenu />}
      onClick={toggleNavSize}
      aria-label=""
      _hover={{ background: 'none' }}
    />
  );
};

export default BtnMenu;
