import React from 'react';

const loopStats = (statObj) => {
  let statsList = []
  for (let key in statObj){
    statsList.push(<li>{key + ": " + statObj[key]}</li>)
  }
  return statsList
}

const ItemDetail = (props) => (
  <div>
  <img className="bigItemImg" src={props.url + props.item.image.full} />
    <h2>{props.item.name}</h2>
    <h3>{props.item.plaintext}</h3>
    <p>{props.item.description}</p>
    <p>Cost: {props.item.gold.total}</p>
    <p>Stats:<ul>{loopStats(props.item.stats).map((stat) => <li>{stat}</li>)}</ul></p>
  </div>
);

export default ItemDetail;
