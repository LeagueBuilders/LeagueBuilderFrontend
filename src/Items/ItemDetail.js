import React from 'react';

const loopStats = (statObj) => {
  let statsList = []
  for (let key in statObj){
    statsList.push(key + ": " + statObj[key])
  }
  return statsList
}

const ItemDetail = (props) => (
  <div className="itemDetail">
    <img className="bigItemImg" src={props.url + props.item.image.full} alt={props.item.name} />
    <h2>{props.item.name + ` - Cost: ${props.item.gold.total}`}</h2>
    <h3>{props.item.plaintext}</h3>
    <div dangerouslySetInnerHTML={{__html: props.item.description}}></div>
  </div>
);
//<div>Stats:<ul>{loopStats(props.item.stats).map((stat) => <li key={stat}>{stat}</li>)}</ul></div>

export default ItemDetail;
