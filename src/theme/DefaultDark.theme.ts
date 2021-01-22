import { ColorTheme, SpacingTheme, Theme } from './Theme.interface';

const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
  primary: '#03a9f4',
  onPrimary: '#fff',
  primaryDark: '#0288d1',
  surface: '#545454',
  onSurface: '#fff',
  background: '#3f3f3f',
};

const DEFAULT_DARK_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME: Theme = {
  id: DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  spacing: DEFAULT_DARK_SPACING_THEME,
};
