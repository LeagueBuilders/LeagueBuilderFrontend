import React from 'react';
import ItemList from '../Items/ItemList';
import ItemDetail from '../Items/ItemDetail';
import ItemBox from '../Items/ItemBox'

const LoadScreenUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/`


const BuildPage = (props) => {

  // state = {
  //   baseStats: {},
  //   inventory: [],
  //   modifiedStats: {}
  // }

  const saveBuild = (champ, inv) => {
    fetch('http://127.0.0.1:3000/builds', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        champion: champ,
        inventory: inv,
      })
    }
  )
  .then(r=>r.json())
  .then(r=>{console.log("finished post", r)})
}

  const showBuild = (({champ, inventory} = props) => {
    if (props.champ){
    return (
      <div>
        <ItemList handleClick={props.onClickItem} />
        <div className="buildInfo">
          <img className='buildPortrait' src={LoadScreenUrl + champ.id + '_0.jpg'} alt="ChampProfileImage"/>
          <h2>{champ.name} Build</h2>

          <div className="inventory">
            <div className="inventorySlot item1 item card">{inventory[0]}</div>
            <div className="inventorySlot item2 item card">{inventory[1]}</div>
            <div className="inventorySlot item3 item card">{inventory[2]}</div>
            <br />
            <div className="inventorySlot item4 item card">{inventory[3]}</div>
            <div className="inventorySlot item5 item card">{inventory[4]</div>
            <div className="inventorySlot item6 item card">{inventory[5]}</div>
          </div>
          <button onClick={()=>{saveBuild(champ.id, inventory)}}>SAVE</button>
        </div>
      </div>

    )}})


  return (
    <div>
    {showBuild()}
  </div>
  )
}

export default BuildPage;
