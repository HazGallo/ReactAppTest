export interface data {
  navSize: any;
  infoUser: any;
  sendData: boolean;
  isOpen: boolean;
  cardSize: boolean;
  readonly: boolean;
  InfoCardDrawer: any;
  setIsOpen: () => void;
  setSendData: () => void;
  setReadonly: () => void;
  handleSizeCardMd: () => void;
  handleSizeCardSm: () => void;
  setInfoUser: (infoUser: any) => void;
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
