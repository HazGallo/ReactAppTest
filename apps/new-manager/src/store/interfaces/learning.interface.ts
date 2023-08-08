import { path } from '../../types/path';

export interface learning {
  lang: string;
  paths: Array<path>;
  getPaths: () => Array<path>;
  getPath: (id: string) => path | undefined;
  setPath: (path: path) => void;
}
