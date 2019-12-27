import React from 'react';
import ReactDOM from 'react-dom';
import CompOne from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompOne />, div);
  ReactDOM.unmountComponentAtNode(div);
});
