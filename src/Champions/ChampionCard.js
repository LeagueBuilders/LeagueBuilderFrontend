import React from 'react';

const ChampionCard = (props) => {
	
	return (
	  	<div className="championCard" 
	  		key={props.champion.id} 
	  		onClick={() => {props.clickEvent(props.champion)}}
	  	>
	   		<img src={props.img_url} alt={props.champion.image.full} />
	   		<div className="champion-details">
	   			<h4 className="champion-name">{props.champion.id}</h4>
	   		</div>
	   	</div>
	);
}

export default ChampionCard;
