import React, { Component } from 'react';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="Tic-Tac-Toe">
        <Board/>
      </div>
    );
  }
}

export default App;
