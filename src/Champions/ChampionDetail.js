import React from 'react';

const ChampionDetail = (props) => {

	const SplashUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/';


	const showChamp = ({champ}=props) => {
		if (champ){

			const statTable = (
				<table>
					<thead>
						<tr>
							<th colspan="2">Stats</th>
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

			let champSplashUrl = SplashUrl + champ.id + '_0.jpg'
			return (
				<div>
					<img className="champSplash background" src={ champSplashUrl } />
					<div classname="description info"><h1>{champ.name}</h1></div>
					<h2>{champ.title}</h2>
					<h3>{champ.blurb}</h3>
					<div className="statTable table stats">{statTable}</div>
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
