import React from 'react';

const ItemBox = (props) => {
  return (
    <div className='item card' onClick={() => {props.handleClick(props.item)}}><img src={props.url + props.item.image.full}></img></div>
  )
};

export default ItemBox;
