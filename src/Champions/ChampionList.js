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
	  			<div id="searchBar">
	  				<form>
			        	<input type="text" 
			        		placeholder="Search" 
			        		value={this.props.search} 
			        		onChange={(event) => this.props.onChangeSearchBar(event)}/>
			        </form>
	  			</div>
	  			<div className="allChampionCard">
	  				{this.showAllChamps()}
	  			</div>
	  		</div>
	  	);
  	}
}

export default ChampionList;
