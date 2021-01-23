import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { Toolbar, ToolbarProps } from '../src/component/Toolbar.component';

describe('Toolbar.component', () => {
  const props: ToolbarProps = {
    title: 'Title',
  };

  it('renders correctly', () => {
    renderer.create(<Toolbar {...props} />);
  });
});
