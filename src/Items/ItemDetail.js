import React from 'react';

const loopStats = (statObj) => {
  let statsList = []
  for (let key in statObj){
    statsList.push(key + ": " + statObj[key])
  }
  return statsList
}

const ItemDetail = (props) => (
  <div>
  <img className="bigItemImg" src={props.url + props.item.image.full} alt={props.item.name} />
    <h2>{props.item.name}</h2>
    <h3>{props.item.plaintext}</h3>
    <p>{props.item.description}</p>
    <p>Cost: {props.item.gold.total}</p>
    <div>Stats:<ul>{loopStats(props.item.stats).map((stat) => <li key={stat} >{stat}</li>)}</ul></div>
  </div>
);

export default ItemDetail;
