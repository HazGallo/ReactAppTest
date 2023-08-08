import { contentType } from '@iseazy/react-kit/dist/components/Tag';

export interface DataCardItem {
  uid: string;
  path: string;
  cdn_url: string;
  title: string;
  description: string;
  default_language_uid: string;
  topic_uid: string;
  points: null | number;
  tags: null | string[];
  isDragging: any;
  setIsDragging: (e: any) => void;
  type: contentType | any;
  checked: boolean;
  sizeCard: 'md';
  text: string;
  typeStatus: "none";
  isOpen: boolean;
  onClose: () => void;
  onOpen: boolean;
}
