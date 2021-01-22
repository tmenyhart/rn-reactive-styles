import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { DEFAULT_LIGHT_THEME, ThemeProvider } from './theme';
import { Toolbar } from './Toolbar.component';

const Styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export const App = React.memo(() => {
  return (
    <SafeAreaView>
      <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
        <View style={Styles.root}>
          <Toolbar title={'Hello Reactive Styles!'} />
        </View>
      </ThemeProvider>
    </SafeAreaView>
  );
});
