import { contentType } from '@iseazy/react-kit/dist/components/InputDropdown';

export interface Element {
  uid: string;
  type: ElementType;
  points: number;
  author_uid: string;
  tags: Tag[];
  topic_weights: TopicWeight[];
  translations: Translation[];
  cover: Asset;
  isDragging: any;
  isOpen: boolean;
  onOpen: () => {};
  onClose: () => void;
  setIsDragging: (e: any) => void;
  newCard: boolean;
  typeCard: 'cardItem' | 'cardQuestion';
  height: number;
}

interface ElementType {
  title: contentType | any;
  is_active: boolean;
}

interface Tag {
  tag_uid: string;
}

interface TopicWeight {
  topic_uid: string;
  weight: number;
}

interface Translation {
  title: string;
  description: string;
  is_Default: boolean;
  language: string;
  asset: Asset;
}

interface Asset {
  filePath: string;
  cdnUrl: null | string;
  mimeType: string;
  size: number;
  sizeFormatted: string;
  imageAsset: null | any; // Esto depende de qué tipo de objeto o estructura contiene imageAsset
  isCompressed: boolean;
  id: number;
  uid: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  deletedAt: null | string;
  active: boolean;
}
