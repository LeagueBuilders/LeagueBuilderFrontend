import React from 'react';
import ChampionCard from "./ChampionCard";

class ChampionList extends React.Component {
	state ={
		champions: []
	}

	componentDidMount(){
  	//console.log("Fetching Data")
  	fetch("http://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/championFull.json")
  		.then((r) => r.json())
  		.then((allChamps) => {
  			let champData = allChamps.data

  			this.setState({
  				champions: champData
  			})
  		})
  	}
  
  	render() {
  		console.log(this.state.champions)
	  	return (
	  		<div>
	  			ChampionList Here
	  		</div>
	  	);
  	}
}

export default ChampionList;
