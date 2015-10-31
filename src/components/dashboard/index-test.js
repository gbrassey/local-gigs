import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';

import Dashboard from './';

describe('root', () => {
  it('renders without problems', () => {
    const dashboard = TestUtils.renderIntoDocument(<Dashboard user={{display_name: 'george b', artists: []}} />);
    expect(dashboard).to.exist;
  });
});
