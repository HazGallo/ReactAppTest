import {
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
} from '../../../../../../../assets/customIcons';

export const contentTypes = {
  AUDIO: 'audio',
  ARTICLE: 'article',
  VIDEO: 'video',
  IMAGE: 'image',
  EXTERNAL: 'external',
  PLAYLIST: 'playlist',
  PDF: 'pdf',
  GALLERY: 'gallery',
  HTML: 'html',
  ZIP: 'zip',
  TASK: 'task',
  POLL: 'poll',
  TEST: 'test',
  GAME: 'game',
  CHALLENGE: 'challenge',
};

export const badgeTypes = [
  {
    type: contentTypes.ARTICLE,
    icon: IconArticle,
    bg: 'coArticle',
  },
  {
    type: contentTypes.AUDIO,
    icon: IconAudio,
    bg: 'coAudio',
  },
  {
    type: contentTypes.CHALLENGE,
    icon: IconChallenge,
    bg: 'coChallenge',
  },
  {
    type: contentTypes.EXTERNAL,
    icon: IconExternal,
    bg: 'coExternal',
  },
  {
    type: contentTypes.GALLERY,
    icon: IconGallery,
    bg: 'coGallery',
  },
  {
    type: contentTypes.GAME,
    icon: IconGame,
    bg: 'coGame',
  },
  {
    type: contentTypes.HTML,
    icon: IconHtml,
    bg: 'coHtml',
  },
  {
    type: contentTypes.IMAGE,
    icon: IconImage,
    bg: 'coImage',
  },
  {
    type: contentTypes.PDF,
    icon: IconPdf,
    bg: 'coPdf',
  },
  {
    type: contentTypes.PLAYLIST,
    icon: IconPlaylist,
    bg: 'coPlaylist',
  },
  {
    type: contentTypes.POLL,
    icon: IconPoll,
    bg: 'coPoll',
  },
  {
    type: contentTypes.TASK,
    icon: IconTask,
    bg: 'coTask',
  },
  {
    type: contentTypes.TEST,
    icon: IconTest,
    bg: 'coTest',
  },
  {
    type: contentTypes.VIDEO,
    icon: IconVideo,
    bg: 'coVideo',
  },
  {
    type: contentTypes.ZIP,
    icon: IconZip,
    bg: 'coZip',
  },
];
