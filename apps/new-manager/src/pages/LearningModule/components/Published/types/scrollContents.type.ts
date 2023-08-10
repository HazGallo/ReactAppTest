type textTarea = {
  [name: string]: any;
};

export const scrollContents: textTarea = {
  '&::-webkit-scrollbar': {
    w: '3',
    bg: 'transparent',
  },
  '&::-webkit-scrollbar-track': {
    w: '3',
    marginBottom: '2',
    marginTop: '2'
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '10',
    bg: 'transparent',
  },
  ':hover::-webkit-scrollbar-thumb': {
    bg: 'neGrey.500',
  },
};
