# CRA Workspaces POC

> Proof of concept: Create-React-App Monorepos with Yarn Workspaces and Lerna (zero-config).

- What's this about? https://github.com/facebook/create-react-app/issues/1333#issuecomment-439275517

## Testing this POC

You could follow the Usage Steps below to set up your own React App Monorepo with Yarn Workspaces and Lerna support.

Or if you would like a shortcut to test things out: you could download this codebase, install and run.

```shell
git clone git@github.com:f1lt3r/cra-workspaces-poc.git
```

## Usage Steps

1. Initialize your Lerna repo:

    > `~/repos/cra-workspaces-poc` is your `<workspaces-root>`

    ```shell
    mkdir ~/repos/cra-workspaces-poc
    cd ~/repos/cra-workspaces-poc
    lerna init
    ```

    Update lerna.json to use yarn workspaces...

    Change file `<workspaces-root>/lerna.json`:

    ```json
    {
        "version": "1.0.0",
        "useWorkspaces": true
    }
    ```

2. Add your workspaces to your package.json:

    `<workspaces-root>/package.json`:

    ```json
    {
        "name": "root",
        "private": true,
        "devDependencies": {
            "lerna": "^3.4.0"
        },
        "workspaces": [
            "apps/*",
            "components/*"
        ]
    }
    ```

3. Create your package directories:

    ```shell
    cd ~/repos/cra-workspaces-poc
    mkdir apps components
    ```

4. Create your React App with custom React-Sripts:

    ```shell
    cd ~/repos/cra-workspaces-poc/apps
    create-react-app --scripts-version @f1lt3r/react-scripts app-foo
    ```

5. Create a React component:

    ```shell
    cd ~/repos/cra-workspaces-poc/components
    mkdir comp-one
    cd comp-one
    ```

    Write to file `<workspaces-root>/components/comp-one/package.json`:

    > Note the user of `main:src` instead of `main`:

    ```json
    {
        "name": "@project/comp-one",
        "version": "1.0.0",
        "main:src": "src/index.js"
    }
    ```

    Add some code for your React component:

    ```shell
    cd ~/repos/cra-workspaces-poc/components/comp-one
    mkdir src
    cd src
    ```

    Write to file `<workspaces-root>/components/comp-one/src/index.js`:

    ```js
    import React from 'react';

    const CompOne = () => <div>
        <h3>CompOne</h3>
        <p><i>Transpiled On-The-Fly</i></p>
        <code>&#123;"main:src": "src/index.js"&#125;</code>
    </div>;

    export default CompOne;
    ```

6. Update your React App to include the dependency for CompOne:

    ```shell
    cd ~/repos/cra-workspaces-poc/apps/app-foo
    ```

    Change file: `<workspaces-root>/apps/app-foo/package.json`:

    ```json
    {
        "name": "app-foo",
        "version": "0.1.0",
        "private": true,
        "dependencies": {
            "@f1lt3r/react-scripts": "2.1.1-zeta-001",
            "react": "^16.6.3",
            "react-dom": "^16.6.3",
            "@project/comp-one": "1.0.0"
        },
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        },
        "eslintConfig": {
            "extends": "react-app"
        },
        "browserslist": [
            ">0.2%",
            "not dead",
            "not ie <= 11",
            "not op_mini all"
        ]
    }
    ```
7. Use your component in your React App:

    Update file `<workspaces-root>/apps/app-foo/src/App.js`:

    ```js
    import React, { Component } from 'react';
    import logo from './logo.svg';
    import './App.css';
    import CompOne from '@project/comp-one';

    class App extends Component {
        render() {
            return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <CompOne />
                </header>
            </div>
            );
        }
    }

    export default App;
    ```

8. Test your app:

    Re-link and build fresh packages:

    ```shell
    cd ~/repos/cra-workspaces-poc/
    yarn
    ```

    Start your app:

    ```shell
    cd apps/app-foo
    yarn start
    ```

9. Results...

    You should see the following app launched:

    ![Screenshot of Yarn Workspaces React App monorepo running](https://i.imgur.com/oUvRvkm.png)

    - CompOne should show up.
    - Changes to CompOne should be hot-reloaded.
    - Any errors you encounter will point to the `src/index.js`.

