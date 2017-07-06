import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <AceEditor
              mode="json" maxLines={2} value={"{\"a\":\"b\"}"}
              onLoad={editor => editor.getSession().setUseWrapMode(true)}
          />
      </div>
    );
  }
}

export default App;
