import {
  IconAudio,
  IconImage,
  IconPdf,
  IconVideo,
  IconZip,
} from '../../../assets/customIcons';

export const contentTypes = {
  AUDIO: 'audio',
  VIDEO: 'video',
  IMAGE: 'image',
  PDF: 'pdf',
  ZIP: 'zip',
};

export const iconTypes = [
  {
    type: contentTypes.AUDIO,
    icon: IconAudio,
    bg: 'coAudio',
    accept: 'audio/*',
    light: 'baVioletRed',
    dark: 'baVioletRed.400'
  },
  {
    type: contentTypes.IMAGE,
    icon: IconImage,
    bg: 'coImage',
    accept: 'image/*',
    light: 'baCeruleanBlue',
    dark: 'baCeruleanBlue.400'
  },
  {
    type: contentTypes.PDF,
    icon: IconPdf,
    bg: 'coPdf',
    accept: 'application/pdf',
    light: 'baOceanBlue',
    dark: 'baOceanBlue.400'
  },
  {
    type: contentTypes.VIDEO,
    icon: IconVideo,
    bg: 'coVideo',
    accept: 'video/*',
    light: 'baViolet',
    dark: 'baViolet.400'
  },
  {
    type: contentTypes.ZIP,
    icon: IconZip,
    bg: 'coZip',
    accept: 'application/zip',
    light: 'baJade',
    dark: 'baJade.400'

  },
];

export type types =
  | 'audio'
  | 'video'
  | 'image'
  | 'pdf'
  | 'zip'
