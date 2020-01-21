import React from 'react';

const ItemBox = (props) => {
  return (
    <div className='item card' onClick={()=> {console.log('hi')}}><img src={props.url + props.item}></img></div>
  )
};

export default ItemBox;
