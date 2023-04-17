type checkBox = {
  [name: string]: any;
};

export const checkBoxCss: checkBox = {
  'span[data-checked]': {
    background: 'neAccent.500',
    borderColor: 'neAccent.500',
    color: 'neWhite.500',
    _hover: {
      background: 'neAccent.600',
      borderColor: 'neAccent.600',
    },
    _dark: {
      background: 'neAccent.400',
      borderColor: 'neAccent.400',
      color: 'neWhite.500',
    },
  },
};
