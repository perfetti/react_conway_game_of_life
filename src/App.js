import React from 'react';
import logo from './logo.svg';
import Board from 'components/Board'
import Cel from 'components/Cel/Cel'
import './App.css';

function App() {

  return (
    <div className="container" >
      <Board boardSize={250} />
    </div>
  );
}

export default App;
