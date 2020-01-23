import React, {Component} from 'react';
import ItemList from '../Items/ItemList';
import ItemDetail from '../Items/ItemDetail';

const LoadScreenUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/`


const BuildPage = (props) => {

  // state = {
  //   baseStats: {},
  //   inventory: [],
  //   modifiedStats: {}
  // }


  const showBuild = (({champ} = props) => {
    if (props.champ){
    return (
      <div>
        <img className='buildPortrait' src={LoadScreenUrl + champ.id + '_0.jpg'} />
        <h2>{champ.name} Build</h2>

        <div className="inventory">
          <div className="inventorySlot item1 item card"></div>
          <div className="inventorySlot item2 item card"></div>
          <div className="inventorySlot item3 item card"></div>
          <br />
          <div className="inventorySlot item4 item card"></div>
          <div className="inventorySlot item5 item card"></div>
          <div className="inventorySlot item6 item card"></div>
        </div>

        <ItemList />
        
      </div>
    )}})


  return (
    <div>
    {showBuild()}
  </div>
  )
}

export default BuildPage;
