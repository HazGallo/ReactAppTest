import CustomDrawer from '../CustomDrawer';
import InteractiveForm from './components/InteractiveForm';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const DrawerParent = (props: Props) => {
  const { isOpen, onClose, onOpen } = props;

  return (
    <CustomDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
      <InteractiveForm onClose={onClose} />
    </CustomDrawer>
  );
};
