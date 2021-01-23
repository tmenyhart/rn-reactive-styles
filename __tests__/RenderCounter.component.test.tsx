import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { RenderCounter } from '../src/component/RenderCounter.component';

describe('RenderCounter.component', () => {
  it('renders correctly', () => {
    renderer.create(<RenderCounter />);
  });
});
