import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { Card } from '../src/component/Card.component';

describe('Card.component', () => {
  it('renders correctly', () => {
    renderer.create(<Card />);
  });
});
