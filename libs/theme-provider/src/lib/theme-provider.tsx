import React, { FC, memo, ReactElement } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

export interface ThemeProviderProps {
  children: ReactElement;
}

const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
  const { children } = props;
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

const m = memo(ThemeProvider);
export { m as ThemeProvider };

/**
 * Must be exported to provide option to use this package's
 * material-ui module augmentation
 */
export type { Theme } from './types';
