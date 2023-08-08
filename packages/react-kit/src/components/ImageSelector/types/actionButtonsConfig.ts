import { croppingOptions } from '../types/FrameTypes';

interface ActionButton {
  action: string;
  icon: any;
  display: string;
}

export const getIconSelected = (position: string) => {
  const foundOption = croppingOptions.find(
    (option) => option.name === position
  );
  return foundOption ? foundOption.icon : null;
};

export const getActionButtons = (
  uncropped: boolean,
  iconSelected: any,
  isSmallScreen: boolean
): ActionButton[] => {
  return [
    {
      action: 'Maximize',
      icon: 'IconMaximize',
      display: 'block',
    },
    {
      action: 'Frame',
      icon: uncropped ? 'IconUncropped' : iconSelected,
      display: 'none',
    },
    {
      action: 'Unsplash',
      icon: 'IconUnsplash',
      display: 'none',
    },
    {
      action: isSmallScreen ? 'Delete' : 'IA',
      icon: isSmallScreen ? 'IconDelete' : 'IconAtom',
      display: 'none',
    },
  ];
};
