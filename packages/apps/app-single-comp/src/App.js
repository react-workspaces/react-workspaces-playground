import React, { Component } from 'react';
import ReactLogo from './ReactLogo.svg';
import YarnCat from './YarnCat.svg';
import './App.css';

import { CompOne } from '@ocdlimited/components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={ReactLogo} className="React-logo" alt="React Logo" />
            <img src={YarnCat} className="Yarn-cat" alt="Yarn Workspaces Cat" />
          </div>
          <h1>
            <a
              className="App-link"
              href="https://github.com/react-workspaces/cra-workspaces-playground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>React</strong> Workspaces
            </a>
          </h1>
          <h2>Hot Reload Your Workspaces</h2>
          <p className="body">
            <code className="file">packages/apps/app-single-comp/src/App.js</code>
            <code className="file">packages/components/src/CompOne/CompOne.js</code>
            <code className="file">packages/components/src/CompTwo/CompTwo.js</code>
          </p>
          <div className="components">
            <CompOne />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
