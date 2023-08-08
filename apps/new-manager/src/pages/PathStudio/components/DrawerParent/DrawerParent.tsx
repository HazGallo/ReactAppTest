import { lazy } from 'react';

// Adding lazy import for CustomDrawer
const CustomDrawer = lazy(() => import('../CustomDrawer'));

// Adding lazy import for InteractiveForm
const InteractiveForm = lazy(() => import('./components/InteractiveForm'));

// Adding lazy import for DrawerFilter
const DrawerFilter = lazy(() => import('./components/DrawerFilter'));

// Adding lazy import for DrawerTranslate
const DrawerTranslate = lazy(() => import('./components/DrawerTranslate'));

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  type: 'InteractiveForm' | 'DrawerFilter' | 'DrawerTranslate';
  extraProps?: Record<string, any>;
}

// Define un objeto que mapea los tipos a sus respectivos componentes
const COMPONENT_MAP: Record<string, React.ComponentType<Props>> = {
  DrawerFilter: DrawerFilter,
  DrawerTranslate: DrawerTranslate,
  InteractiveForm: InteractiveForm,
};

// Adding memo to DrawerParent to optimize re-renders
const DrawerParent = (props: Props) => {
  const { isOpen, onClose, onOpen, type, extraProps = {} } = props;

  const ComponentToRender = COMPONENT_MAP[type];

  return (
    <CustomDrawer
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      {ComponentToRender && (
        <ComponentToRender
          isOpen={isOpen}
          key={type}
          onClose={onClose}
          onOpen={onOpen}
          type={type}
          {...extraProps}
        />
      )}
    </CustomDrawer>
  );
};

export default DrawerParent;
