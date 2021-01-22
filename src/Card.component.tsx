import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native';

import { Theme, useTheme, useThemeAwareObject } from './theme';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      backgroundColor: theme.color.surface,
      justifyContent: 'center',
      marginTop: theme.spacing.double,
      padding: theme.spacing.double,
    },
    infoTextWrapper: {
      flexDirection: 'row',
      marginBottom: theme.spacing.double,
    },
    infoText: {
      color: theme.color.onSurface,
      fontSize: 14,
    },
    infoTextBold: {
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: theme.color.primary,
      borderRadius: 4,
      padding: theme.spacing.base,
    },
    buttonText: {
      color: theme.color.onPrimary,
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
  return styles;
};

export const Card = React.memo(() => {
  const { theme, toggleTheme } = useTheme();
  const Styles = useThemeAwareObject(createStyles);

  const InfoTextBoldStyles = React.useMemo<StyleProp<TextStyle>>(() => {
    const infoTextBoldStyles: StyleProp<TextStyle> = [Styles.infoText, Styles.infoTextBold];

    return infoTextBoldStyles;
  }, [Styles]);

  const ButtonElement = React.useMemo(() => {
    return (
      <TouchableOpacity onPress={toggleTheme} activeOpacity={0.75} style={Styles.button}>
        <Text style={Styles.buttonText}>{'Toggle the Theme!'}</Text>
      </TouchableOpacity>
    );
  }, [toggleTheme, Styles]);

  return (
    <View style={Styles.root}>
      <View style={Styles.infoTextWrapper}>
        <Text style={Styles.infoText}>{'The current theme is: '}</Text>
        <Text style={InfoTextBoldStyles}>{theme.id}</Text>
      </View>
      {ButtonElement}
    </View>
  );
});
