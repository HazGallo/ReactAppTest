type textTarea = {
  [name: string]: any;
};

export const textTareaCss: textTarea = {
  '&::-webkit-scrollbar': {
    w: '1',
    bg: 'transparent',
  },
  '&::-webkit-scrollbar-track': {
    w: '2',
    marginBottom: '2',
    marginTop: '2',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '10',
    bg: 'transparent',
  },
  ':hover::-webkit-scrollbar-thumb': {
    bg: 'neGrey.500',
  },
};
