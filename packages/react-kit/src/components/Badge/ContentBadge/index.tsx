import { Badge } from '..';

export type contentType =
  | 'audio'
  | 'article'
  | 'video'
  | 'image'
  | 'external'
  | 'playlist'
  | 'pdf'
  | 'gallery'
  | 'html'
  | 'zip'
  | 'task'
  | 'poll'
  | 'test'
  | 'game'
  | 'url'
  | 'challenge';

interface Props {
  type: contentType;
  size: 'sm' | 'md';
  skeleton?: boolean;
}

export const BadgeContent = ({ type, size, skeleton }: Props) => {
  return <Badge type={type} size={size} skeleton={skeleton} />;
};
