import {
  IconDate,
  IconDraft,
  IconSend,
} from '../../../../../../assets/customIcons';

export const ContentTypes = {
  DRAFT: 'Draft',
  PLANNED: 'Planned',
  PUBLISHED: 'Published',
  NONE: 'none',
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
  {
    type: ContentTypes.NONE,
  },
];
