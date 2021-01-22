import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native';

import { DEFAULT_DARK_THEME, DEFAULT_LIGHT_THEME, Theme, useTheme, useThemeAwareObject } from '../theme';
import { RenderCounter } from './RenderCounter.component';

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
    buttonsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing.double,
    },
    button: {
      backgroundColor: theme.color.primary,
      borderRadius: 4,
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: theme.spacing.base,
      padding: theme.spacing.base,
    },
    buttonText: {
      color: theme.color.onPrimary,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  return styles;
};

export const Card = React.memo(() => {
  const { theme, setTheme, toggleTheme } = useTheme();
  const Styles = useThemeAwareObject(createStyles);

  const InfoTextBoldStyles = React.useMemo<StyleProp<TextStyle>>(() => {
    const infoTextBoldStyles: StyleProp<TextStyle> = [Styles.infoText, Styles.infoTextBold];

    return infoTextBoldStyles;
  }, [Styles]);

  const ToggleButtonElement = React.useMemo(() => {
    return (
      <TouchableOpacity onPress={toggleTheme} activeOpacity={0.75} style={Styles.button}>
        <Text style={Styles.buttonText}>{'Toggle the Theme!'}</Text>
      </TouchableOpacity>
    );
  }, [toggleTheme, Styles]);

  const SetLightThemeButtonElement = React.useMemo(() => {
    return (
      <TouchableOpacity onPress={() => setTheme(DEFAULT_LIGHT_THEME)} activeOpacity={0.75} style={Styles.button}>
        <Text style={Styles.buttonText}>{'Set light Theme!'}</Text>
      </TouchableOpacity>
    );
  }, [setTheme, Styles]);

  const SetDarkThemeButtonElement = React.useMemo(() => {
    return (
      <TouchableOpacity onPress={() => setTheme(DEFAULT_DARK_THEME)} activeOpacity={0.75} style={Styles.button}>
        <Text style={Styles.buttonText}>{'Set dark Theme!'}</Text>
      </TouchableOpacity>
    );
  }, [setTheme, Styles]);

  return (
    <View style={Styles.root}>
      <View style={Styles.infoTextWrapper}>
        <Text style={Styles.infoText}>{'The current theme is: '}</Text>
        <Text style={InfoTextBoldStyles}>{theme.id}</Text>
      </View>
      <RenderCounter />
      <View style={Styles.buttonsWrapper}>
        {ToggleButtonElement}
        {SetLightThemeButtonElement}
        {SetDarkThemeButtonElement}
      </View>
    </View>
  );
});
