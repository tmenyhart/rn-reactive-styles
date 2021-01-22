import React from 'react';

import { DEFAULT_LIGHT_THEME, ThemeProvider } from './theme';
import { Card } from './Card.component';
import { ScreenView } from './ScreenView.component';
import { Toolbar } from './Toolbar.component';

export const App = React.memo(() => {
  return (
    <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
      <ScreenView>
        <Toolbar title={'Hello Reactive Styles!'} />
        <Card />
      </ScreenView>
    </ThemeProvider>
  );
});
