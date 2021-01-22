import React from 'react';
import { Theme } from './Theme.interface';
import { useTheme } from './Theme.context';

type Generator<T extends {}> = (theme: Theme) => T;

export const useThemeAwareObject = <T extends {}>(fn: Generator<T>) => {
  const { theme } = useTheme();

  const ThemeAwareObject = React.useMemo(() => fn(theme), [fn, theme]);
  return ThemeAwareObject;
};
