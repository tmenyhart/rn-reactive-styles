import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Theme, useThemeAwareObject } from '../theme';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      backgroundColor: theme.color.background,
      flex: 1,
    },
  });
  return styles;
};

export interface ScreenViewProps {
  children?: React.ReactNode;
}

export const ScreenView = React.memo<ScreenViewProps>((props) => {
  const Styles = useThemeAwareObject(createStyles);

  return <View style={Styles.root}>{props.children}</View>;
});
