import React, { Component } from 'react';
import ItemBox from './ItemBox'
import ItemDetail from './ItemDetail'

class ItemList extends Component {

  state = {
    items: [],
    selectedItem: {},
    detailedView: false,
    hovering: null
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

  //******* Functions to add item to item list

  chooseItem = (itemClicked) => {
    console.log("Choosing Items", itemClicked)
    console.log("Items", this.state.items)
    this.setState({
      selectedItem: itemClicked
    })
  }




  toggleDetail = (item) => {
    this.setState({detailedView: !this.state.detailedView})
  }

  clickedItem = (item) => {
    this.toggleDetail(item);
    this.chooseItem(item);
  }

  showDetail = () => {
    if (this.state.detailedView) {
      return <ItemDetail item={this.state.hovering} url={this.ImageUrl} />
    }
  }

  renderItems = (itemObject) => {
    let items = []
    for (let item in itemObject) {
      // items.push(itemObject[item].image.full)
      items.push(item)
    }
    return items
  }

  showTooltip = (evt, item) => {
    this.setState({
      hovering: item,
      detailedView: true
    });
  }

  hideTooltip = (item) => {
    //DO NOTHING
    // this.setState({
    //   hovering: null,
    //   detailedView: false
    // });
  }


  render() {
    return (
      <div className="itemsAndInfo right">
        <div className='detailPane'>{this.showDetail()}</div>
        <div className='itemList'>
          {this.renderItems(this.state.items).map(i => <ItemBox key={i} item={{i, ...this.state.items[i]}} url={this.ImageUrl} handleClick={this.clickedItem} handleHover={this.showTooltip} handleExit={this.hideTooltip} />)}
        </div>
      </div>
    );
  }

}

export default ItemList;
