import { Document } from "./document";

type Coordinates = {
    lat: number;
    lon: number;
};

type Location = {
  label?: string;
  coordinates?: Coordinates;
};


export interface TaskFileObject {
  data?: string | unknown;
  extension: string;
  name?: string;
  size?: string;
  sizeBytes?: number
}

export interface CompleteTask {
  comment?: string;
  file?: TaskFileObject;
}

export type Task = {
  commented?: boolean;
  completed?: boolean;
  date?: number;
  documents?: Array<any>;
  instructions?: string;
  link?: string;
  location?: Location;
  requires_file_upload?: boolean;
  upload_instructions?: string;
};