export interface data {
  navSize: any;
  sendData: boolean;
  cardSize: boolean;
  readonly: boolean;
  InfoCardDrawer: any;
  setSendData: () => void;
  setReadonly: () => void;
  handleSizeCardMd: () => void;
  handleSizeCardSm: () => void;
  changeNavSize: (size: string) => void;
  setIsInfoCardDrawer: (InfoCardDrawer: any) => void;
  setVideo: (video: Video) => void;
  dataVideo: Video;
}

export interface Video {
  uid: string;
  path: string;
  cdn_url: string;
  title: string;
  description: string;
  default_language_uid: string;
  topic_uid: string;
  points: null | number;
  tags: null | string[];
}
