import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChampionList from "./Champions/ChampionList.js"
import NavBar from "./Champions/NavBar.js"
import ItemList from "./Items/ItemList"

function App() {
  return (
    <div id="Main">
      <NavBar />
      <ChampionList />
      <ItemList />
    </div>
  );
}

export default App;
