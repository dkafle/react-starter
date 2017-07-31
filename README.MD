## Project Setup

Install NodeJS, Node Version Manager (nvm) and Node Security Platform (nsp) on your machine before installing.

[Get nvm](https://github.com/creationix/nvm/blob/master/README.md#installation)

[Get nsp](https://nodesecurity.io/opensource)

#### Commands

```
$npm install
$npm start
$npm test
$npm build
```

#### Tools and Features

  * Webpack
    * Hot Module Reloading
    * Chunk compiled JS
    * SCSS mix with JS for Development
    * Cachebusting
    * Custom code injection in deployment
  * Linting with ESLint
  * Express Dev Server
  * NPM Scripts

#### Todo
  * Incorporate Style Library

#### Development Guidelines

Here are some guidelines for writing clean code.

  * Make sure there are not any Lint Warnings.
  * Enable Lint add-on on your editor

### React Specific Guidelines

  * Use Stateless Components for UI Markup
```
import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({message}) => {
  const sayHello = (event) => {
    console.log(event.target);
  };

  return (
    <button onClick={sayHello}>
      {message}
    </button>
  );
};

Button.propTypes = {
  message: PropTypes.string
};

export default Button;
```
  * Avoid UI Markup in Statefull Components
  * Avoid logic in Stateless Components

