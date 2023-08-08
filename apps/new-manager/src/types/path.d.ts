export type section = {
  id: string;
  name: string;
  description: string;
  cover: string;
};

export type path = {
  id: string;
  name: string;
  description: string;
  cover: string;
  datetime: string;
  type: string;
  points: number;
  sections: Array<section>;
};
