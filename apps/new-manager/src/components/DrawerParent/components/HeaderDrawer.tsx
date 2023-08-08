import { Button } from '@iseazy/react-kit';
import { Flex } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  onClose?: () => void;
}

export const HeaderDrawer = (props: Props) => {
  const { onClick, disabled, onClose } = props;

  return (
    <>
      <button onClick={onClose} style={{ background: 'none', outline: 'none' }}>
        <IoIosArrowBack size={20} />
      </button>
      <Flex gap="3">
        <Button
          onClick={onClick}
          label="Save"
          sizeName="md"
          variant="primary"
          formats="fixed"
          type="submit"
        />
      </Flex>
    </>
  );
};
