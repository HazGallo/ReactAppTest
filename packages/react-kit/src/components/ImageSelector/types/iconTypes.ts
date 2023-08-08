import {
  IconImage,
} from '../../../assets/customIcons';

export const contentTypes = {
  IMAGE: 'image',
};

export const iconTypes = [
  {
    type: contentTypes.IMAGE,
    icon: IconImage,
    bg: 'coImage',
    accept: 'image/*',
    light: 'baCeruleanBlue',
    dark: 'baCeruleanBlue.400',
  },
];

export type typesContent = 'audio' | 'video' | 'image' | 'pdf' | 'zip';
