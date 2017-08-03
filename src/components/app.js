import React from 'react';
import './app.scss';
import Button from './formControls/Button.jsx';
import Input from './formControls/Input.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello React</h3>
        <Input name="hello" label="wow" value="this" placeholder="enter something" />
        <br/>
        <Input name="hello" label="wow" value="this" placeholder="enter something" />
        <br/>
        <Input name="hello" label="wow" value="this" placeholder="enter something" />
        <br/>
        <Button label="Submit" />
      </div>
    );
  }
}

export default App;
