import {
  IconArticle,
  IconAudio,
  IconExternal,
  IconGallery,
  IconGame,
  IconHtml,
  IconImage,
  IconPdf,
  IconPoll,
  IconTask,
  IconTest,
  IconVideo,
  IconZip,
} from '../../../assets/customIcons';

export const nameIcon = {
  Audio: 'Audio',
  Article: 'Article',
  Video: 'Video',
  Image: 'Image',
  External: 'External',
  Pdf: 'Pdf',
  Gallery: 'Gallery',
  Html: 'Html',
  Zip: 'Zip',
  Task: 'Task',
  Poll: 'Poll',
  Test: 'Test',
  Game: 'Game',
};

export const optionTypes = [
  {
    type: nameIcon.Article,
    icon: IconArticle,
    bg: 'coArticle',
  },
  {
    type: nameIcon.Audio,
    icon: IconAudio,
    bg: 'coAudio',
  },
  {
    type: nameIcon.External,
    icon: IconExternal,
    bg: 'coExternal',
  },
  {
    type: nameIcon.Gallery,
    icon: IconGallery,
    bg: 'coGallery',
  },
  {
    type: nameIcon.Game,
    icon: IconGame,
    bg: 'coGame',
  },
  {
    type: nameIcon.Html,
    icon: IconHtml,
    bg: 'coHtml',
  },
  {
    type: nameIcon.Image,
    icon: IconImage,
    bg: 'coImage',
  },
  {
    type: nameIcon.Pdf,
    icon: IconPdf,
    bg: 'coPdf',
  },
  {
    type: nameIcon.Poll,
    icon: IconPoll,
    bg: 'coPoll',
  },
  {
    type: nameIcon.Task,
    icon: IconTask,
    bg: 'coTask',
  },
  {
    type: nameIcon.Test,
    icon: IconTest,
    bg: 'coTest',
  },
  {
    type: nameIcon.Video,
    icon: IconVideo,
    bg: 'coVideo',
  },
  {
    type: nameIcon.Zip,
    icon: IconZip,
    bg: 'coZip',
  },
];

export type typesName =
  | 'Audio'
  | 'Article'
  | 'Video'
  | 'Image'
  | 'External'
  | 'Pdf'
  | 'Gallery'
  | 'Html'
  | 'Zip'
  | 'Task'
  | 'Poll'
  | 'Test'
  | 'Game';
