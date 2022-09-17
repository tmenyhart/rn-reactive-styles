import React, { Component, ReactElement } from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { DEFAULT_DARK_THEME, DEFAULT_LIGHT_THEME, Theme, ThemeContextConsumer } from '../theme';
import { createStyles } from './Card.styles';
import { RenderCounter } from './RenderCounter.component';

export class Card2 extends Component {
  private _renderToggleButton(style: StyleProp<ViewStyle>, textStyle: StyleProp<TextStyle>, toggleTheme: () => void): ReactElement {
    return (
      <TouchableOpacity onPress={toggleTheme} activeOpacity={0.75} style={style}>
        <Text style={textStyle}>{'Toggle the Theme!'}</Text>
      </TouchableOpacity>
    );
  }

  private _renderSetLightThemeButton(
    style: StyleProp<ViewStyle>,
    textStyle: StyleProp<TextStyle>,
    setTheme: (theme: Theme) => void
  ): ReactElement {
    return (
      <TouchableOpacity onPress={() => setTheme(DEFAULT_LIGHT_THEME)} activeOpacity={0.75} style={style}>
        <Text style={textStyle}>{'Set light Theme!'}</Text>
      </TouchableOpacity>
    );
  }

  private _renderSetDarkThemeButton(
    style: StyleProp<ViewStyle>,
    textStyle: StyleProp<TextStyle>,
    setTheme: (theme: Theme) => void
  ): ReactElement {
    return (
      <TouchableOpacity onPress={() => setTheme(DEFAULT_DARK_THEME)} activeOpacity={0.75} style={style}>
        <Text style={textStyle}>{'Set dark Theme!'}</Text>
      </TouchableOpacity>
    );
  }

  private _render(theme: Theme, toggleTheme: () => void, setTheme: (theme: Theme) => void): ReactElement {
    const Styles = createStyles(theme);
    const infoTextBoldStyles: StyleProp<TextStyle> = [Styles.infoText, Styles.infoTextBold];

    return (
      <View style={Styles.root}>
        <View style={Styles.infoTextWrapper}>
          <Text style={Styles.infoText}>{'The current theme is: '}</Text>
          <Text style={infoTextBoldStyles}>{theme.id}</Text>
        </View>
        <RenderCounter />
        <View style={Styles.buttonsWrapper}>
          {this._renderToggleButton(Styles.button, Styles.buttonText, toggleTheme)}
          {this._renderSetLightThemeButton(Styles.button, Styles.buttonText, setTheme)}
          {this._renderSetDarkThemeButton(Styles.button, Styles.buttonText, setTheme)}
        </View>
      </View>
    );
  }

  render(): ReactElement {
    return <ThemeContextConsumer>{({ theme, toggleTheme, setTheme }) => this._render(theme, toggleTheme, setTheme)}</ThemeContextConsumer>;
  }
}
