import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Theme, useThemeAwareObject } from './theme';

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
    },
  });
  return styles;
};

export interface ToolbarProps {
  title: string;
}

export const Toolbar = React.memo<ToolbarProps>((props) => {
  const Styles = useThemeAwareObject(createStyles);

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{props.title}</Text>
    </View>
  );
});
