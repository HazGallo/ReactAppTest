import {
  IconChevronRight,
  IconClose,
  IconPlus,
  IconCheckCircle,
} from '../../../assets/customIcons';

export const contentTypes = {
  ADD: 'add',
  REMOVE: 'remove',
  SELECTED: 'selected',
  LINK: 'link',
  PRIMARY: 'primary',
};

export const typesVersion = [
  {
    type: contentTypes.ADD,
    icon: IconPlus,
  },
  {
    type: contentTypes.LINK,
    icon: IconChevronRight,
  },
  {
    type: contentTypes.REMOVE,
    icon: IconClose,
  },
  {
    type: contentTypes.SELECTED,
    icon: IconCheckCircle,
  },
];
