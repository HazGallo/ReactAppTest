type textTarea = {
  [name: string]: any;
};

export const textTareaCss: textTarea = {
  spellCheck: 'false',
  sx: {
    '&::-webkit-scrollbar': {
      w: '1',
      display: 'none',
    },
    '&::-webkit-scrollbar-track': {
      w: '2',
      marginBottom: '2',
      marginTop: '2',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10',
      bg: 'neGrey.500',
    },
    ':hover::-webkit-scrollbar': {
      display: 'initial',
    },
  },
};
