import { IconAudio, IconImage, IconVideo } from '../../../../assets/customIcons';

export const contentTypes = {
  AUDIO: 'audio',
  VIDEO: 'video',
  IMAGE: 'image',
};

export const topicTypes = [
  {
    type: contentTypes.AUDIO,
    icon: IconAudio,
    bg: 'coAudio',
  },

  {
    type: contentTypes.IMAGE,
    icon: IconImage,
    bg: 'coImage',
  },

  {
    type: contentTypes.VIDEO,
    icon: IconVideo,
    bg: 'coVideo',
  },
];
