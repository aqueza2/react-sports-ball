import React, { Component } from 'react';
import SportsBall from './SportsBall.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>What's your favorite city?</h1>
          <h4><SportsBall/></h4>
      </div>

    );
  }
}



export default App;
