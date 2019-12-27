import React from 'react';
import ReactDOM from 'react-dom';
import CompTwo from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompTwo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
