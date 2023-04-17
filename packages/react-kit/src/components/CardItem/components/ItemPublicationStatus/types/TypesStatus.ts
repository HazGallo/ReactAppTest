import { IconDate, IconSend, IconDraft  } from '../../../../../assets/customIcons';

export const ContentTypes = {
  DRAFT: 'Draft',
  PLANNED: 'Planned',
  PUBLISHED: 'Published',
};

export const TypesStatus = [
  {
    type: ContentTypes.DRAFT,
    icon: IconDraft,
  },
  {
    type: ContentTypes.PLANNED,
    icon: IconDate,
  },
  {
    type: ContentTypes.PUBLISHED,
    icon: IconSend,
  },
];
