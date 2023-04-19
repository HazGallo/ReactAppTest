import { IconButton } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { sliceInformation } from '../../store/sliceInformation';

const BtnMenu = () => {
  const { changeNavSize, navSize } = sliceInformation();

  return (
    <IconButton
      background="none"
      _hover={{ background: 'none' }}
      icon={<FiMenu />}
      onClick={() => {
        if (navSize == 'small') changeNavSize('large');
        else changeNavSize('small');
      }}
      aria-label={''}
    />
  );
};

export default BtnMenu