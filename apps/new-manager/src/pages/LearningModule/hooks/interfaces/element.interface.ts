import { contentType } from '@iseazy/react-kit/dist/components/InputDropdown';

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

export interface Element {
  uid: string;
  title: string;
  language: string;
  cover: Cover;
  createdAt: string;
  updatedAt: string | null;
}
