import React from 'react';
import ChampionCard from "./ChampionCard.js";

const LOL_VERSION = "10.1.1";
//ex: http://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/championFull.json
const CHAMP_DATA_URL = `http://ddragon.leagueoflegends.com/cdn/${LOL_VERSION}/data/en_US/championFull.json`;
//ex: http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Aatrox.png
const CHAMP_IMG_URL = `http://ddragon.leagueoflegends.com/cdn/${LOL_VERSION}/img/champion/`;

class ChampionList extends React.Component {
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

  	// ***********  Event Handlers ************
  	onClickChampion = (champ) => {
  		console.log("Clicked" , champ)
  	}

  	//To show all the champions
  	showAllChamps = () => {
  		let allChamps = this.state.filterChamp
  		let champInArray = []
 
  		for (let property in allChamps) {
  			champInArray.push(allChamps[property])
  		}

  		return champInArray.map((champ) => {
  			return <ChampionCard 
  						key={champ.id}
  						champion={champ}
  						img_url={CHAMP_IMG_URL + champ.image.full}
  						clickEvent={this.onClickChampion}
  					/>
  		})
  	}
  
  	render() {
	  	return (
	  		<div>
	  			<div id="searchBar">
	  				<p> Placeholder for Search Bar </p>
	  			</div>
	  			<div className="allChampionCard">
	  				{this.showAllChamps()}
	  			</div>
	  		</div>
	  	);
  	}
}

export default ChampionList;
