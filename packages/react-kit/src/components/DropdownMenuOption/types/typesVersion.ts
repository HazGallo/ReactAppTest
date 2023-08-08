import {
  IconClose,
  IconPlus,
  IconCheckCircle,
} from '../../../assets/customIcons';

export const contentTypes = {
  ADD: 'add',
  REMOVE: 'remove',
  SELECTED: 'selected'
};

export const typesVersion = [
  {
    type: contentTypes.ADD,
    icon: IconPlus,
  },
  {
    type: contentTypes.REMOVE,
    icon: IconClose,
  },
  {
    type: contentTypes.SELECTED,
    icon: IconCheckCircle
  },
];
