import React from 'react';
import ChampionCard from "./ChampionCard.js";

const LOL_VERSION = "10.1.1";
//ex: http://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/championFull.json
const CHAMP_DATA_URL = `http://ddragon.leagueoflegends.com/cdn/${LOL_VERSION}/data/en_US/championFull.json`;
//ex: http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Aatrox.png
const CHAMP_IMG_URL = `http://ddragon.leagueoflegends.com/cdn/${LOL_VERSION}/img/champion/`;

class ChampionList extends React.Component {
  	//To show all the champions
  	showAllChamps = () => {
  		let allChamps = this.props.filterChamp
  		let champInArray = []
 
  		for (let property in allChamps) {
  			champInArray.push(allChamps[property])
  		}

  		return champInArray.map((champ) => {
  			return <ChampionCard 
  						key={champ.id}
  						champion={champ}
  						img_url={this.props.base_img_url + champ.image.full}
  						clickEvent={this.props.onClickChampion}
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
