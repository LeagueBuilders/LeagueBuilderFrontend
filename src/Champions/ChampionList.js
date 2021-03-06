import React from 'react';
import ChampionCard from "./ChampionCard.js";

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
	  			<div className="searchBar">
			        <input type="text" 
			        	className="search"
			        	placeholder="Search for a Champion by Name" 
			        	value={this.props.search} 
			        	onChange={(event) => this.props.onChangeSearchBar(event)}/>
			        <img className="searchIcon right" 
			        	src='/search-512.png'
			        	alt="SearchLogo"/> 
	  			</div>
	  			<div className="allChampionCard">
	  				{this.showAllChamps()}
	  			</div>
	  		</div>
	  	);
  	}
}

export default ChampionList;
