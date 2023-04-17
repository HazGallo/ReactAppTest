import { extendTheme } from '@chakra-ui/react';
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
import { neBlack, neAccent, neWhite, neGrey } from './colors/neutral';
import { lkBlue, lkGreen, lkOrange, lkRed, lkYellow } from './colors/likert';
import { rkBronze, rkGold, rkSilver } from './colors/ranking';
import { stError, stProgress, stSuccess, stWarning } from './colors/status';
import { Checkbox } from './checkboxComponent';
import { HeadingTheme } from './sizesHeading';
import { TextTheme } from './SizesText';
import { blackAlpha, whiteAlpha } from './colors/blackAndWhiteAlphas';
import '@fontsource/roboto';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        transitionProperty: 'all',
        transitionDuration: 'normal',
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
    baGrey: '#D9D9D9',
    bgGreyIcon: '#D8D8D8',

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
      txSecondary: { default: 'neGrey.700', _dark: 'neGrey.600' },
      txTertiary: { default: 'neGrey.500', _dark: 'neGrey.900' },
      txHighlight: { default: 'neAccent.500', _dark: 'neAccent.400' },

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
      compBackgroundHover: { default: 'blackAlpha.50',  _dark: 'whiteAlpha.200'},
      compBackgroundSelected: { default: 'transparent', _dark: 'transparent'},
      compBackgroundSelectedHover: { default: 'blackAlpha.50', _dark: 'whiteAlpha.200'},
      compBackgroundDisabled: { default: 'blackAlpha.50', _dark: 'blackAlpha.200'},
      compBackgroundError: { default: 'transparent', _dark: 'transparent' },
      compBorderRest: { default: 'transparent', _dark: 'transparent' },
      compBorderHover: { default: 'transparent', _dark: 'transparent' },
      compBorderSelected: { default: 'blackAlpha.200', _dark: 'whiteAlpha.300' },
      compBorderSelectedHover: { default: 'blackAlpha.200', _dark: 'whiteAlpha.300' },
      compBorderDisabled: { default: 'transparent', _dark: 'transparent' },
      compBorderError: { default: 'stError.500', _dark: 'stError.400' },

      //special cases
      compBackgroundFilled: { default: 'blackAlpha.50', _dark: 'whiteAlpha.200' },
      compBackgroundFilledHover: { default: 'blackAlpha.200', _dark: 'whiteAlpha.300' },
    },
    shadows: {
      plus: { default: '10px 10px 10px blue', _dark: '10px 10px 10px green' },
    },
  },
});
