interface Asset {
  filePath: string;
  cdnUrl: string | null;
  mimeType: string;
  size: number;
  sizeFormatted: string;
  imageAsset: string | null;
  isCompressed: boolean;
  id: number;
  uid: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  deletedAt: string | null;
  active: boolean;
}

interface Translation {
  title: string;
  description: string;
  is_Default: boolean;
  language: string;
  asset: Asset;
}

interface TopicWeight {
  topic_uid: string;
  weight: number;
}

interface Tag {
  tag_uid: string;
}

interface Type {
  title: string;
  is_active: boolean;
}

export interface Element {
  uid: string;
  type: Type;
  points: number;
  author_uid: string;
  tags: Tag[];
  topic_weights: TopicWeight[];
  translations: Translation[];
}
