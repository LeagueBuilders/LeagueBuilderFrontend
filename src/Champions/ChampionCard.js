import React from 'react';
import ChampionDetail from "./ChampionDetail.js"




const ChampionCard = (props) => {
	
	return (
	  	<div className="championCard" 
	  		key={props.champion.id} 
	  		onClick={() => {props.clickEvent(props.champion)}}
	  	>
	   		<img src={props.img_url} alt={props.champion.image.full} />
	   	</div>
	);
}

export default ChampionCard;
