export interface Video {
  uid: string;
  path: string;
  cdn_url: string;
  title: string;
  description: string;
  default_language_uid: string;
  topic_uid: string;
  points: any;
  tags: null | string[];
}
