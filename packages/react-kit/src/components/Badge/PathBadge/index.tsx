import { Badge } from "..";

export type pathType =
  | 'course'
  | 'express'
  | 'instagram'
  | 'journey'
  | 'cards'
  | 'single'
  ;

interface Props {
  type: pathType;
  size: 'xs' | 'sm' | 'md';
  skeleton?: boolean;
}

export const BadgePath = ({ type, size, skeleton }: Props) => {
  return (
    <Badge
      type={type}
      size={size}
      skeleton={skeleton}
    />
  );
};
