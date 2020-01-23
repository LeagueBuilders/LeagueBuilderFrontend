import React from 'react';
import './App.css';
import ChampionList from "./Champions/ChampionList.js"
import ChampionDetail from "./Champions/ChampionDetail.js"
import NavBar from "./Champions/NavBar.js"
import { Route, Switch, withRouter } from 'react-router-dom'
import BuildPage from './Build/BuildPage.js'


const LOL_VERSION = "10.1.1";
//ex: http://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/championFull.json
const CHAMP_DATA_URL = `http://ddragon.leagueoflegends.com/cdn/${LOL_VERSION}/data/en_US/championFull.json`;
//ex: http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Aatrox.png
const CHAMP_IMG_URL = `http://ddragon.leagueoflegends.com/cdn/${LOL_VERSION}/img/champion/`;

//How some Vars work
/*
  champions - a list of all champ with all data, never changed
  positionFilterChamp - We first filter whats being displayed by filtering the position they are in (top, mid, jg, etc)
  searchFilterChamp - Then we filter based on what the user types down in the search bar
  search - The data in search bar

*/
class App extends React.Component {
  state ={
    champions: [],
    positionFilterChamp: [],
    searchFilterChamp: [],
    search: "",

    //These states are used for Build PAge
    inventory: []
  }

  componentDidMount(){
    //console.log("Fetching Data")
    fetch(CHAMP_DATA_URL)
      .then((r) => r.json())
      .then((allChamps) => {
        let champData = allChamps.data

        this.setState({
          champions: champData,
          positionFilterChamp: champData,
          searchFilterChamp: champData
        })
      })
  }

  renderAllChamp = () => {

    return <ChampionList
              filterChamp={this.state.searchFilterChamp}
              base_img_url={CHAMP_IMG_URL}
              onClickChampion={this.onClickChampion}
              search={this.state.search}
              onChangeSearchBar={this.onChangeSearchBar}
            />
  }

  fixId = (idParam) => {
    let id = idParam.charAt(0).toUpperCase() + idParam.slice(1).toLowerCase()

    switch(id) {
      case "Aurelionsol":
        id="AurelionSol"
        break;
      case "Drmundo":
      case "Mundo":
        id="DrMundo"
        break;
      case "Gp":
        id="Gangplank"
        break;
      case "Jarvaniv":
      case "J4":
        id="JarvanIV"
        break;
      case "Kogmaw":
        id="KogMaw"
        break;
      case "Lb":
        id="Leblanc"
        break;
      case "Leesin":
      case "Lee":
        id="LeeSin"
        break;
      case "Cancer":
        id="Malzahar"
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
      case "Goku":
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
      case "Ww":
        id="Warwick"
        break;
      case "Xinzhao":
      case "Winsnao":
        id="XinZhao"
        break;
      default:
        break;
    }
    return id
  }

  renderChamp = (champName) => {
    let id = this.fixId(champName.match.params.id)

    return <ChampionDetail champ={this.state.champions[id]}
      handleButton={this.onBuildButton} />
  }

  renderBuild = (champName) => {
    let id = this.fixId(champName.match.params.id)

    return  <BuildPage
              champ={this.state.champions[id]}
              inventory={this.state.inventory}
            />

  }

  // ***********  Event Handlers ************
    onClickChampion = (champ) => {
      this.props.history.push(`/champion/${champ.id}`)
    }

    onClickLogo = () => {
      this.props.history.push('/')
    }

    onBuildButton = (path) => {
      this.props.history.push(path)
    }

    onChangeSearchBar = (event) => {
      let newSearch = event.target.value;

      //Getting the data of the champion after filtered.
      //IMPORTANT: Remember SearchFilter exist after position filter
      let resultChamp = this.state.positionFilterChamp

      if (newSearch.length > 0)
      {
        let champNames = Object.keys(resultChamp)

        //This is the return Hash for the reduce
        //By default reduce first argument is an array
        let tempChamps = {}
        //CurrentValue = the key of the champions
        resultChamp = champNames.reduce((a, currentValue) => {
          //Exceptions where name don't match. organized by champion id in the API
          let tempSearch = newSearch.toLowerCase();
          switch(tempSearch) { //make sure tempSearch is always all lowercase
            case "j4":
              tempSearch = "jarvaniv"
              break;
            case "lb":
              tempSearch = "leblanc"
              break;
            case "mf":
              tempSearch = "missfortune"
              break;
            case "cancer":
              tempSearch = "malzahar"
              break;
            case "wukong": //Wukong is called MonkeyKing in the api
            case "goku":
              tempSearch = "monkeyking"
              break;
            case "devil":
              tempSearch = "teemo"
              break;
            case "tf":
              tempSearch = "twistedfate"
              break;
            case "ww":
              tempSearch = "warwick"
              break;
            case "winsnao":
              tempSearch = "xinzhao"
              break;
            default:
              break;
          }

          //If then names match, put the champion inside the return hash.
          if (currentValue.toLowerCase().includes(tempSearch))
          {
            tempChamps[currentValue] = resultChamp[currentValue];
          }
          return tempChamps;
        }, [])
      }

      //Changing the search result + new filtered champs
      this.setState({
        search: newSearch,
        searchFilterChamp: resultChamp
      })
    }

  render() {
    return (
      <div id="Main">
        <NavBar logoOnClick={this.onClickLogo}/>
         <Switch>
           <Route path="/" exact component={this.renderAllChamp} />
           <Route path="/champion/:id" render={this.renderChamp} />
           <Route path="/build/:id" render={this.renderBuild} />
        </Switch>
      </div>
    );
  }
}

 export default withRouter(App);
