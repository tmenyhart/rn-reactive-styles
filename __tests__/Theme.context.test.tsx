import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { ThemeProvider, Props as ThemeProviderProps } from '../src/theme/Theme.context';
import { DEFAULT_LIGHT_THEME } from '../src/theme/DefaultLight.theme';

describe('Toolbar.component', () => {
  const props: ThemeProviderProps = {
    initial: DEFAULT_LIGHT_THEME,
  };

  it('renders correctly', () => {
    renderer.create(<ThemeProvider {...props} />);
  });
});
