import { ReactNode } from 'react';
import MaterialUiLabTypes from '@material-ui/lab';

declare module '@material-ui/core/index' {
  export interface Color {
    0: string;
    main: string;
    light: string;
    dark: string;
  }
}

// Lab components aren't supported in theme customization in current mui version, so we have to augment them.
// See this issue: https://github.com/mui-org/material-ui/issues/19427#issuecomment-597776056
declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey {
    MuiAlert: MaterialUiLabTypes.AlertClassKey;
  }
}

declare module '@material-ui/core/styles/props' {
  export interface ComponentsPropsList {
    MuiAlert: MaterialUiLabTypes.AlertProps;
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare module '@material-ui/lab/Alert' {
  export interface AlertProps {
    children: ReactNode;
  }
}

declare module '@material-ui/core/styles/createTypography' {
  // For creation function
  export interface TypographyOptions {
    display1: TypographyStyleOptions;
    interactive1: TypographyStyleOptions;
    interactive2: TypographyStyleOptions;
    caption1: TypographyStyleOptions;
    caption2: TypographyStyleOptions;
  }

  // For usage
  export interface Typography {
    display1: TypographyStyle;
    interactive1: TypographyStyle;
    interactive2: TypographyStyle;
    caption1: TypographyStyle;
    caption2: TypographyStyle;
  }
}

interface SpecialColors {
  [index: number]: string;
}

interface ChartColors {
  grid: string;
}

declare module '@material-ui/core/styles/createPalette' {
  // BG types
  export interface TypeBackground {
    sidebar: string;
    verticalDivider: string;
    filters: string;
    scrollbar: string;
  }

  // Extend palette colors to have these attribute
  export interface PaletteColor {
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  export interface Palette {
    specialColors: SpecialColors;
    chart: ChartColors;
  }

  export interface PaletteOptions {
    specialColors: SpecialColors;
    chart: ChartColors;
  }
}

/**
 * Must be exported to provide option to use this package's
 * material-ui module augmentation
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type { Theme } from '@material-ui/core/index';
