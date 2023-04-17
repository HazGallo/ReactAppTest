
export type Author = {
  id?: number;
  image?: string;
  name?: string;
}

export type Folder = {
  description?: string;
  id: number;
  img: string;
  name: string;
}

export type Document = {
  author?: Author;
  created_at?: number;
  favourite?: boolean;
  folder?: Folder;
  html_description?: string;
  icon?: string;
  id?: number;
  like?: boolean;
  name?: string;
  new?: boolean;
  progressState?: string;
  task?: Task;
  time_reading?: number;
  type_i18n?: string;
  type?: string;
  url?: string;
};
