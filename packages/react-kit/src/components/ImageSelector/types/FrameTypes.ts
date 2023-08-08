import { CSSObject } from '@emotion/react';

export const croppingOptions = [
  {
    name: 'Top-left,',
    icon: 'IconFrameUpLeft',
    style: {
      objectPosition: 'top left',
    },
  },
  {
    name: 'Top',
    icon: 'IconFrameUp',
    style: {
      objectPosition: 'top',
    },
  },
  {
    name: ' Top-Right',
    icon: 'IconFrameUpRight',
    style: {
      objectPosition: 'top right',
    },
  },
  {
    name: 'Center-Left',
    icon: 'IconFrameLeft',
    style: {
      objectPosition: 'center left',
    },
  },
  {
    name: 'Center',
    icon: 'IconFrameCentered',
    style: {
      objectPosition: 'center',
    },
  },
  {
    name: 'Center-Right',
    icon: 'IconFrameRight',
    style: {
      objectPosition: 'center right',
    },
  },
  {
    name: 'Bottom-Left',
    icon: 'IconFrameDownLeft',
    style: {
      objectPosition: 'bottom left',
    },
  },
  {
    name: 'Bottom',
    icon: 'IconFrameDown',
    style: {
      objectPosition: 'bottom',
    },
  },
  {
    name: 'Bottom-Right',
    icon: 'IconFrameDownRight',
    style: {
      objectPosition: 'bottom right',
    },
  },
];

export const styles : CSSObject = {
  image: {
    position: 'absolute',
    cursor: 'pointer',
    width: '100%',
    height: '100%'
  },
  uncropped: {
    objectFit: 'contain',
    maxW: '100%',
    maxH: '100%',
  },
};