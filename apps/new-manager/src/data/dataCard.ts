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
  | 'challenge';

type pathType =
  | 'course'
  | 'express'
  | 'instagram'
  | 'journey'
  | 'cards'
  | 'single';
  
type ContentTypeStatus = 'Draft' | 'Planned' | 'Published' | 'none';

export const DataCard = [
  {
    id: '1',
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image__5_.png?updatedAt=1679594378559',
    type: 'audio' as contentType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '25 min',
    typeStatus: 'Published' as ContentTypeStatus,
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/imagen.jpg?updatedAt=1679594373657',
  },
  {
    id: '2',
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/x.jpg?updatedAt=1679594374016',
    type: 'video' as contentType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '10 min',
    typeStatus: 'Draft' as ContentTypeStatus,
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/x__1_.jpg?updatedAt=1679596375374',
  },
  {
    id: '3',
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/image2.jpeg?updatedAt=1679594373855',
    type: 'article' as contentType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '15 min',
    typeStatus: 'Planned' as ContentTypeStatus,
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image3.jpg?updatedAt=1679600359717',
  },
  {
    id: '4',
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/image3.jpeg?updatedAt=1679594369326',
    type: 'instagram' as pathType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '3 min',
    typeStatus: 'Planned' as ContentTypeStatus,
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image5.jpg?updatedAt=1679600359948',
  },
  {
    id: '5',
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/image5.jpeg?updatedAt=1679594369199',
    type: 'task' as contentType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '40 min',
    typeStatus: 'Published' as ContentTypeStatus,
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image__4_.png?updatedAt=1679594370190',
  },
  {
    id: '6',
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image__5_.png?updatedAt=1679594378559',
    type: 'audio' as contentType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '25 min',
    typeStatus: 'Published' as ContentTypeStatus,
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/imagen.jpg?updatedAt=1679594373657',
  },
  {
    id: '7',
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/x.jpg?updatedAt=1679594374016',
    type: 'video' as contentType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '10 min',
    typeStatus: 'Draft' as ContentTypeStatus,
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/x__1_.jpg?updatedAt=1679596375374',
  },
  {
    id: '8',
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/image2.jpeg?updatedAt=1679594373855',
    type: 'article' as contentType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '15 min',
    typeStatus: 'Planned' as ContentTypeStatus,
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image3.jpg?updatedAt=1679600359717',
  },
  {
    id: '9',
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/image3.jpeg?updatedAt=1679594369326',
    type: 'instagram' as pathType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '3 min',
    typeStatus: 'Planned' as ContentTypeStatus,
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image5.jpg?updatedAt=1679600359948',
  },
  {
    id: '10',
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/image5.jpeg?updatedAt=1679594369199',
    type: 'task' as contentType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '40 min',
    typeStatus: 'Published' as ContentTypeStatus,
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image__4_.png?updatedAt=1679594370190',
  },
  {
    id: '11',
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image__5_.png?updatedAt=1679594378559',
    type: 'audio' as contentType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '25 min',
    typeStatus: 'Published' as ContentTypeStatus,
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/imagen.jpg?updatedAt=1679594373657',
  },
  {
    id: '12',
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/x.jpg?updatedAt=1679594374016',
    type: 'video' as contentType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '10 min',
    typeStatus: 'Draft' as ContentTypeStatus,
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/x__1_.jpg?updatedAt=1679596375374',
  },
  {
    id: '13',
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/image2.jpeg?updatedAt=1679594373855',
    type: 'article' as contentType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '15 min',
    typeStatus: 'Planned' as ContentTypeStatus,
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image3.jpg?updatedAt=1679600359717',
  },
  {
    id: '14',
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/image3.jpeg?updatedAt=1679594369326',
    type: 'instagram' as pathType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '3 min',
    typeStatus: 'Planned' as ContentTypeStatus,
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image5.jpg?updatedAt=1679600359948',
  },
  {
    id: '15',
    coverimage:
      'https://ik.imagekit.io/s8b2ycrch/image5.jpeg?updatedAt=1679594369199',
    type: 'task' as contentType,
    checked: false,
    sizeCard: 'md' as 'md',
    text: '40 min',
    typeStatus: 'Published' as ContentTypeStatus,
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image__4_.png?updatedAt=1679594370190',
  },
];

export function getRandomObject() {
  const randomIndex = Math.floor(Math.random() * DataCard.length);
  return DataCard[randomIndex];
}
