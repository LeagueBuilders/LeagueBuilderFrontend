import React from 'react';

let renderChampTags = (tags) => {
	return tags.map((tag) => {
		return <li className="champion-tag"> {tag} </li>
	})
}

const ChampionCard = (props) => {
	return (
	  	<div className="championCard" 
	  		key={props.champion.id} 
	  		onClick={() => {props.clickEvent(props.champion)}}
	  	>
	   		<img src={props.img_url} alt={props.champion.image.full} />
	   		<div className="champion-details">
	   			<h4 className="champion-name">{props.champion.id}</h4>
	   			<ul className="champion-tags">
	   				{renderChampTags(props.champion.tags)}
	   			</ul>
	   		</div>
	   	</div>
	);
}

export default ChampionCard;
