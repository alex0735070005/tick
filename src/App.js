import React, { Component } from 'react';
import Tick from './components/UIComponents/Tick';
import './styles/loading.scss';
import './styles/tick.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Tick/>
      </div>
    );
  }
}

export default App;
