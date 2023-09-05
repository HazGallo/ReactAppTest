interface ContentCover {
  filePath: string;
  dominantColor: string;
}

export interface Section {
  uid: string;
  title: string;
  position: number;
  contentsCount: number;
  firstThreeContentCovers: ContentCover[];
  createdAt: string;
  updatedAt: string | null;
}