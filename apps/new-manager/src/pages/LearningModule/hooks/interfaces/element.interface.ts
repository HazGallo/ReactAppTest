// Interfaces

interface ImageAsset {
  focusPoint: number;
  isCropable: boolean;
  dominantColor: string;
}

interface Cover {
  filePath: string;
  cdnUrl: string | null;
  type: string;
  mimeType: string;
  size: number;
  isCompressed: boolean;
  estimatedTime: string | null;
  uid: string;
  imageAsset: ImageAsset;
  createdAt: string;
  updatedAt: string | null;
}

interface Data {
  uid: string;
  title: string;
  language: string;
  cover: Cover;
  createdAt: string;
  updatedAt: string | null;
}

export interface SectionsResponse {
  data: Data[];
  totalCount: number;
  currentPage: number;
  nextPage: string;
  previousPage: string | null;
  timestamp: string;
}
