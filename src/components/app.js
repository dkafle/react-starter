import React from 'react';
import './app.scss';
import Button from './formControls/button';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello React</h3>
        <Button message="Hello, World!" />
      </div>
    );
  }
}

export default App;
