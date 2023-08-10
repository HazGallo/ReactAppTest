import { extendTheme } from '@chakra-ui/react';

// Colors
import {
  baAmber,
  baAtlantis,
  baCalifornia,
  baCeruleanBlue,
  baCornflowerBlue,
  baGreen,
  baJade,
  baOceanBlue,
  baOrange,
  baPear,
  baPersianRed,
  baPink,
  baPomegranate,
  baRose,
  baRoyalBlue,
  baScooter,
  baViolet,
  baVioletRed,
} from './colors/basics';

import { neAccent, neBlack, neGrey, neWhite } from './colors/neutral';

import { lkBlue, lkGreen, lkOrange, lkRed, lkYellow } from './colors/likert';

import { rkBronze, rkGold, rkSilver } from './colors/ranking';

import { stError, stProgress, stSuccess, stWarning } from './colors/status';

import { blackAlpha, whiteAlpha } from './colors/blackAndWhiteAlphas';

// Checkbox Component
import { Checkbox } from './checkboxComponent';

// Heading and Text Sizes
import { HeadingTheme } from './sizesHeading';
import { TextTheme } from './SizesText';

// Font Imports
import '@fontsource/roboto';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        transitionProperty: 'all',
        transitionDuration: 'normal',
      },
      '.chakra-heading': {
        fontFamily: 'inherit',
      },
    },
  },
  config: {
    disableTransitionOnChange: false,
  },
  textStyles: {
    ...TextTheme,
  },
  components: {
    Checkbox: Checkbox,
    Heading: HeadingTheme,
  },
  fonts: {
    heading: `"Roboto", sans-serif`,
    body: `"Roboto", sans-serif`,
  },
  colors: {
    //provisional colors
    invisible: '#20202040',
    bgShadow: '#00000029',
    bgShadowButton: '#FA185980',
    baGrey: '#D9D9D9',
    bgGreyIcon: '#D8D8D8',
    baGreyTagSystem: '#F5F5F5',
    baCategoryMenu: '#909090',
    bgFileHover: '#FFDFE8',
    borderFileHover: '#FA185933',
    bgAvatarDisabled: '#F0F0F0',
    imageLoad: '#F5F5F5',
    bgDrawer: '#00000066',
    ItemGroupColor: '#9F9F9F',

    //Basics
    baPersianRed: baPersianRed,
    baOrange: baOrange,
    baPomegranate: baPomegranate,
    baCalifornia: baCalifornia,
    baAmber: baAmber,
    baPear: baPear,
    baAtlantis: baAtlantis,
    baJade: baJade,
    baGreen: baGreen,
    baScooter: baScooter,
    baOceanBlue: baOceanBlue,
    baCornflowerBlue: baCornflowerBlue,
    baRoyalBlue: baRoyalBlue,
    baCeruleanBlue: baCeruleanBlue,
    baViolet: baViolet,
    baRose: baRose,
    baPink: baPink,
    baVioletRed: baVioletRed,

    //Status
    stSuccess,
    stError,
    stWarning,
    stProgress,

    //Likert
    lkGreen: lkGreen,
    lkBlue: lkBlue,
    lkYellow: lkYellow,
    lkOrange: lkOrange,
    lkRed: lkRed,

    //Ranking
    rkGold: rkGold,
    rkSilver: rkSilver,
    rkBronze: rkBronze,

    //Neutral
    neBlack: neBlack,
    neGrey: neGrey,
    neWhite: neWhite,
    neAccent: neAccent,

    //Black & White Alphas
    blackAlpha,
    whiteAlpha,
  },
  semanticTokens: {
    colors: {
      button: { default: 'neAccent.500', _dark: 'baOceanBlue.500' },
      primary: { default: 'neWhite.500', _dark: 'neGrey.800' },

      //Text & icon color
      txPrimary: { default: 'neBlack.500', _dark: 'neWhite.500' },
      txPrimaryHover: { default: 'neGrey.700', _dark: 'neGrey.600' },
      txSecondary: { default: 'neGrey.700', _dark: 'neGrey.600' },
      txSecondaryHover: { default: 'neGrey.500', _dark: 'neGrey.500' },
      txTertiary: { default: 'neGrey.500', _dark: 'neGrey.900' },
      txTertiaryHover: { default: 'neGrey.500', _dark: 'neGrey.900' },
      txHighlight: { default: 'neAccent.500', _dark: 'neAccent.400' },
      txHighlightHover: { default: 'neAccent.400', _dark: 'neAccent.300' },

      //Content color
      coArticle: { default: 'baRose.500', _dark: 'baRose.400' },
      coVideo: { default: 'baViolet.500', _dark: 'baViolet.400' },
      coAudio: { default: 'baVioletRed.500', _dark: 'baVioletRed.400' },
      coPdf: { default: 'baOceanBlue.500', _dark: 'baOceanBlue.400' },
      coImage: { default: 'baCeruleanBlue.500', _dark: 'baCeruleanBlue.400' },
      coGallery: { default: 'baScooter.500', _dark: 'baScooter.400' },
      coExternal: { default: 'baRoyalBlue.500', _dark: 'baRoyalBlue.400' },
      coHtml: { default: 'baGreen.500', _dark: 'baGreen.400' },
      // coDocument: '--',
      coZip: { default: 'baJade.500', _dark: 'baJade.400' },
      coTask: { default: 'baAtlantis.500', _dark: 'baAtlantis.400' },
      // coLink: '--',
      coGame: { default: 'baCalifornia.500', _dark: 'baCalifornia.400' },
      coTest: { default: 'baAmber.500', _dark: 'baAmber.400' },
      coPoll: { default: 'baPear.500', _dark: 'baPear.400' },
      coPlaylist: { default: 'neGrey.500', _dark: 'neGrey.500' },
      coChallenge: { default: 'neGrey.500', _dark: 'neGrey.500' },
      coUrl: { default: 'baPear.500', _dark: 'baPear.400' },

      //Path colors
      paCourse: { default: 'baPomegranate.500', _dark: 'baPomegranate.400' },
      paExpress: { default: 'baPear.500', _dark: 'baPear.400' },
      paInstagram: { default: 'baScooter.500', _dark: 'baScooter.400' },
      paJourney: { default: 'baRose.500', _dark: 'baRose.400' },
      paCards: { default: 'baCeruleanBlue.500', _dark: 'baCeruleanBlue.400' },
      paSingle: { default: 'baCalifornia.500', _dark: 'baCalifornia.400' },

      //Text
      text: { default: 'neBlack.500', _dark: 'neWhite.500' },

      //Card
      cdBackground: { default: 'neWhite.500', _dark: 'whiteAlpha.200' },

      //Component colors
      compBackgroundRest: { default: 'transparent', _dark: 'transparent' },
      compBackgroundHover: {
        default: 'blackAlpha.50',
        _dark: 'whiteAlpha.200',
      },
      compBackgroundSelected: { default: 'transparent', _dark: 'transparent' },
      compBackgroundSelectedHover: {
        default: 'blackAlpha.50',
        _dark: 'whiteAlpha.200',
      },
      compBackgroundDisabled: {
        default: 'transparent',
        _dark: 'transparent',
      },
      compBackgroundError: { default: 'transparent', _dark: 'transparent' },
      compBorderRest: { default: 'transparent', _dark: 'transparent' },
      compBorderHover: { default: 'transparent', _dark: 'transparent' },
      compBorderSelected: {
        default: 'blackAlpha.200',
        _dark: 'whiteAlpha.300',
      },
      compBorderSelectedHover: {
        default: 'blackAlpha.200',
        _dark: 'whiteAlpha.300',
      },
      compBorderDisabled: { default: 'transparent', _dark: 'transparent' },
      compBorderError: { default: 'stError.500', _dark: 'stError.400' },

      //special cases
      compBackgroundFilled: {
        default: 'blackAlpha.50',
        _dark: 'whiteAlpha.200',
      },
      compBackgroundFilledHover: {
        default: 'blackAlpha.200',
        _dark: 'whiteAlpha.300',
      },
      compBackgroundFilledDisabled: {
        default: 'blackAlpha.50',
        _dark: 'whiteAlpha.200',
      },
      compBackgroundTransparent: {
        default: 'blackAlpha.600',
        _dark: '',
      },
      compBackgroundTrasparentHover: {
        default: 'blackAlpha.800',
        _dark: '',
      },
      compBackgroundTrasparentSelected: {
        default: 'whiteAlpha.800',
        _dark: '',
      },
      compBackgroundTrasparentSelectedHover: {
        default: 'whiteAlpha.900',
        _dark: '',
      },
      compBackgroundTransparentDisabled: {
        default: 'blackAlpha.300',
        _dark: '',
      },
      compBorderTrasparentSelected: {
        default: 'whiteAlpha.800',
        _dark: '',
      },
      compBorderTrasparentSelectedHover: {
        default: 'whiteAlpha.800',
        _dark: '',
      },
    },
    shadows: {
      plus: { default: '10px 10px 10px blue', _dark: '10px 10px 10px green' },
    },
  },
});
