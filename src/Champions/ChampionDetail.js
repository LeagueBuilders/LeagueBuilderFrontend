import React from 'react';
import { Link } from 'react-router-dom'
const ChampionDetail = (props) => {

	const SplashUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/';


	const showChamp = ({champ}=props) => {
		if (champ){

			let champSplashUrl = SplashUrl + champ.id + '_0.jpg'

			const statTable = (
				<table>
					<thead>
						<tr>
							<th colSpan="2">Stats</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Health</td>
							<td>{champ.stats.hp}</td>
						</tr>
						<tr>
							<td>Mana</td>
							<td>{champ.stats.mp}</td>
						</tr>
						<tr>
							<td>Attack Damage</td>
							<td>{champ.stats.attackdamage}</td>
						</tr>
						<tr>
							<td>Armor</td>
							<td>{champ.stats.armor}</td>
						</tr>
						<tr>
							<td>Magic Resist</td>
							<td>{champ.stats.spellblock}</td>
						</tr>
					</tbody>
				</table>
			);

			return (
				<div className="champDetail">
					<img className="champSplash background" src={ champSplashUrl } />
					<div className="title">
						<h1>{champ.name} -  {champ.title}</h1>
					</div>
					<div className="description info">
					<h3>{champ.blurb}</h3>
				</div>
					<div className="statTable table stats">{statTable}</div>
					<Link to={`/build/${champ.id}/Tets`}>
						<button>Create Build</button>
					</Link>
				</div>
			)
		}
	}

	console.log("Details", props)
	return (
	  <content>
	  	 {showChamp()}
	  </content>
	);
}

export default ChampionDetail;
