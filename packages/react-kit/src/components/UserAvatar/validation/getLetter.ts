export const getTwoLetters = (string: string) => {
  if (!string) return '';

  const words = string.split(' ');

  if (words.length >= 2) {
    return (
      words[0].replace(/[^a-zA-Z]/g, '').charAt(0) +
      words[1].replace(/[^a-zA-Z]/g, '').charAt(0)
    );
  } else if (words.length === 1) {
    return words[0].replace(/[^a-zA-Z]/g, '').substring(0, 2);
  }

  return '';
};
