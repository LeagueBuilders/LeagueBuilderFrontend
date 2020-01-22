import React from 'react';
import './App.css';
import ChampionList from "./Champions/ChampionList.js"
import ChampionDetail from "./Champions/ChampionDetail.js"
import NavBar from "./Champions/NavBar.js"
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import BuildPage from './Build/BuildPage'


const LOL_VERSION = "10.1.1";
//ex: http://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/championFull.json
const CHAMP_DATA_URL = `http://ddragon.leagueoflegends.com/cdn/${LOL_VERSION}/data/en_US/championFull.json`;
//ex: http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Aatrox.png
const CHAMP_IMG_URL = `http://ddragon.leagueoflegends.com/cdn/${LOL_VERSION}/img/champion/`;


class App extends React.Component {
  state ={
    champions: [],
    filterChamp: [],
    selectedChamp: {}
  }

  componentDidMount(){
    //console.log("Fetching Data")
    fetch(CHAMP_DATA_URL)
      .then((r) => r.json())
      .then((allChamps) => {
        let champData = allChamps.data

        this.setState({
          champions: champData,
          filterChamp: champData
        })
      })
  }

  renderAllChamp = () => {
    return <ChampionList
              filterChamp={this.state.filterChamp}
              base_img_url={CHAMP_IMG_URL}
              onClickChampion={this.onClickChampion}
            />
  }

  fixId = (idParam) => {
    let id = idParam.charAt(0).toUpperCase() + idParam.slice(1).toLowerCase()

    switch(id) {
      case "Aurelionsol":
        id="AurelionSol"
        break;
      case "Drmundo":
        id="DrMundo"
        break;
      case "Jarvaniv":
        id="JarvanIV"
        break;
      case "Kogmaw":
        id="KogMaw"
        break;
      case "Leesin":
        id="LeeSin"
        break;
      case "Masteryi":
        id="MasterYi"
        break;
      case "Missfortune":
      case "Mf":
        id="MissFortune"
        break;
      case "Monkeyking":
      case "Wukong":
        id="MonkeyKing"
        break;
      case "Reksai":
        id="RekSai"
        break;
      case "Tahmkench":
        id="TahmKench"
        break;
      case "Devil":
        id="Teemo"
        break;
      case "Twistedfate":
      case "Tf":
        id="TwistedFate"
        break;
      case "Xinzhao":
        id="XinZhao"
        break;
    }
    return id
  }

  renderChamp = (champName) => {
    let id = this.fixId(champName.match.params.id)

    return <ChampionDetail champ={this.state.champions[id]} />
  }

  renderBuild = (champName) => {
    let id = this.fixId(champName.match.params.id)

    return  <BuildPage
              champ={this.state.champions[id]}
            />

  }

  // ***********  Event Handlers ************
    onClickChampion = (champ) => {
      console.log("Clicked" , champ)
      this.props.history.push(`/champion/${champ.id}`)
    }

    onClickLogo = () => {
      console.log("Logo Clicked")
      this.props.history.push('/')
    }

  render() {
    return (
      <div id="Main">
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={this.renderAllChamp} />
            <Route path="/champion/:id" render={this.renderChamp} />
            <Route
              path="/build/:id"
              render={this.renderBuild}
              />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
