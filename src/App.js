import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChampionList from "./Champions/ChampionList.js"
import NavBar from "./Champions/NavBar.js"

function App() {
  return (
    <div id="Main">
      <NavBar />
      <ChampionList />
    </div>
  );
}

export default App;
