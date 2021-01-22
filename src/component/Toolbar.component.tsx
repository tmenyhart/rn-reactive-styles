import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { Theme, useThemeAwareObject } from '../theme';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.color.primary,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: theme.spacing.base,
      width: '100%',
    },
    text: {
      color: theme.color.onPrimary,
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
  return styles;
};

const createStyleVariables = (theme: Theme) => {
  const styleVariables = {
    statusBarColor: theme.color.primaryDark,
  };
  return styleVariables;
};

export interface ToolbarProps {
  title: string;
}

export const Toolbar = React.memo<ToolbarProps>((props) => {
  const Styles = useThemeAwareObject(createStyles);
  const StyleVariables = useThemeAwareObject(createStyleVariables);

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={StyleVariables.statusBarColor} barStyle={'light-content'} />
      <Text style={Styles.text}>{props.title}</Text>
    </View>
  );
});
