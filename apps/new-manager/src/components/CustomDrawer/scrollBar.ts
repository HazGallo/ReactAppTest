type textTarea = {
  [name: string]: any;
};

export const scrollBar: textTarea = {
  '&::-webkit-scrollbar': {
    w: '3',
    bg: 'transparent',
  },
  '&::-webkit-scrollbar-track': {
    w: '4',
    marginBottom: '2',
    marginTop: '2',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '6',
    bg: 'transparent',
  },
  ':hover::-webkit-scrollbar-thumb': {
    bg: 'neGrey.500',
  },
};
