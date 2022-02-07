import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Card} from '@monorepo/card';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card />
      </header>
    </div>
  );
}

export default App;
