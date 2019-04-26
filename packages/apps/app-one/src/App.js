import React, { Component } from 'react';
import ReactLogo from './ReactLogo.svg';
import YarnCat from './YarnCat.svg';
import './App.css';
import CompOne from '@project/comp-one';
import CompTwo from '@project/comp-two';

class App extends Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">
            <div>
                <img src={ReactLogo} className="React-logo" alt="React Logo" />
                <img src={YarnCat} className="Yarn-cat" alt="Yarn Workspaces Cat" />
            </div>
            <h1><a
                className="App-link"
                href="https://github.com/react-workspaces"
                target="_blank"
                rel="noopener noreferrer"
            >
                <strong>React</strong> Workspaces
            </a></h1>
            <p class="body">
                <h2>Hot Reload Your Workspaces</h2>
                <code class="file">packages/apps/app-one/src/App.js</code>
                <code class="file">packages/components/comp-one/src/index.js</code>
                <code class="file">packages/components/comp-two/src/index.js</code>
            </p>
            <div class="components">
                <CompOne />
                <CompTwo />
            </div>
            </header>
        </div>
        );
    }
}

export default App;