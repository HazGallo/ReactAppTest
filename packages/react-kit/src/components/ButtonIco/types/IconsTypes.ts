import {
  IconGhost,
  IconArticle,
  IconAudio,
  IconChallenge,
  IconExternal,
  IconGallery,
  IconGame,
  IconHtml,
  IconImage,
  IconPdf,
  IconPlaylist,
  IconPoll,
  IconTask,
  IconTest,
  IconVideo,
  IconZip,
} from '../../../assets/customIcons';

export const contentTypes = {
  GHOST: 'IconGhost',
  AUDIO: 'IconAudio',
  ARTICLE: 'IconArticle',
  VIDEO: 'IconVideo',
  IMAGE: 'IconImage',
  EXTERNAL: 'IconExternal',
  PLAYLIST: 'IconPlaylist',
  PDF: 'IconPdf',
  GALLERY: 'IconGallery',
  HTML: 'IconHtml',
  ZIP: 'IconZip',
  TASK: 'IconTask',
  POLL: 'IconPoll',
  TEST: 'IconTest',
  GAME: 'IconGame',
  CHALLENGE: 'IconChallenge',
};

export const IconsTypes = [
  {
    type: contentTypes.GHOST,
    icon: IconGhost,
  },
  {
    type: contentTypes.ARTICLE,
    icon: IconArticle,
  },
  {
    type: contentTypes.AUDIO,
    icon: IconAudio,
  },
  {
    type: contentTypes.CHALLENGE,
    icon: IconChallenge,
  },
  {
    type: contentTypes.EXTERNAL,
    icon: IconExternal,
  },
  {
    type: contentTypes.GALLERY,
    icon: IconGallery,
  },
  {
    type: contentTypes.GAME,
    icon: IconGame,
  },
  {
    type: contentTypes.HTML,
    icon: IconHtml,
  },
  {
    type: contentTypes.IMAGE,
    icon: IconImage,
  },
  {
    type: contentTypes.PDF,
    icon: IconPdf,
  },
  {
    type: contentTypes.PLAYLIST,
    icon: IconPlaylist,
  },
  {
    type: contentTypes.POLL,
    icon: IconPoll,
  },
  {
    type: contentTypes.TASK,
    icon: IconTask,
  },
  {
    type: contentTypes.TEST,
    icon: IconTest,
  },
  {
    type: contentTypes.VIDEO,
    icon: IconVideo,
  },
  {
    type: contentTypes.ZIP,
    icon: IconZip,
  },
];

export type types =
  | 'IconGhost'
  | 'IconAudio'
  | 'IconArticle'
  | 'IconVideo'
  | 'IconImage'
  | 'IconExternal'
  | 'IconPlaylist'
  | 'IconPdf'
  | 'IconGallery'
  | 'IconHtml'
  | 'IconZip'
  | 'IconTask'
  | 'IconPoll'
  | 'IconTest'
  | 'IconGame'
  | 'IconChallenge';
