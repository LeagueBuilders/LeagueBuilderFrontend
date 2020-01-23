import React from 'react';

const ItemBox = (props) => {
  return (
    <div className='item card' onMouseEnter={(event) => props.handleHover(event, props.item)} onMouseLeave={evt => {props.handleExit (evt)}} onClick={() => {props.handleClick(props.item)}}><img alt={props.item.name} src={props.url + props.item.image.full}></img></div>
  )
};

export default ItemBox;
