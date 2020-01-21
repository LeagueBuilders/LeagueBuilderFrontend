import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChampionList from "./Champions/ChampionList.js"
import NavBar from "./Champions/NavBar.js"
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'

class App extends React.Component {
  state={
    test: "test"
  }

  render() {
    return (
      <div id="Main">
        <NavBar />
        <ChampionList />
      </div>
    );
  }
}

export default App;
