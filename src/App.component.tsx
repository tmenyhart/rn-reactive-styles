import React from 'react';

import { Card, Card2, ScreenView, Toolbar } from './component';
import { DEFAULT_LIGHT_THEME, ThemeProvider } from './theme';

export const App = React.memo(() => {
  return (
    <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
      <ScreenView>
        <Toolbar title={'Hello Reactive Styles!'} />
        <Card />
        <Card2 />
      </ScreenView>
    </ThemeProvider>
  );
});
