import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { ScreenView } from '../src/component/ScreenView.component';

describe('ScreenView.component', () => {
  it('renders correctly', () => {
    renderer.create(<ScreenView />);
  });
});
