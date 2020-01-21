import React, { Component } from 'react';
import ItemBox from './ItemBox'

class ItemList extends Component {

  state = {
    items: [],
    selectedItem: {},
    detailedView: false
  }

  ImageUrl = 'http://ddragon.leagueoflegends.com/cdn/10.1.1/img/item/'

  componentDidMount() {
    fetch ('http://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/item.json')
    .then(res => res.json())
    .then((itemResult) => {
      this.setState(
        {items: itemResult.data}
      )
    })
  }

  chooseItem = (itemClicked) => {
    this.setState({
      selectedItem: itemClicked
    })
  }

  toggleDetail = (item) => {
    this.setState({detailedView: !this.state.detailedView})
  }

  showDetail = () => {

  }

  renderItems = (itemObject) => {
    console.log(itemObject);
    let items = []
    for (let item in itemObject) {
      items.push(itemObject[item].image.full)
    }
    return items
  }


  render() {
    return (
      <div className='detailPane'></div>
      <div className='itemList'>
        {this.renderItems(this.state.items).map(i => <ItemBox item={i} url={this.ImageUrl} />)}
      </div>
    );
  }

}

export default ItemList;
