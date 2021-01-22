export interface ColorTheme {
  primary: string;
  onPrimary: string;
  primaryDark: string;
  surface: string;
  onSurface: string;
  background: string;
}

export interface SpacingTheme {
  base: number;
  double: number;
}

export interface Theme {
  id: string;
  color: ColorTheme;
  spacing: SpacingTheme;
}
