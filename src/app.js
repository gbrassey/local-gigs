import React from 'react';
import Greeting from './components/greeting';

React.render(
  <Greeting name="World" />,
  document.getElementById('mount-node')
);
