import React, { Component } from 'react';

class StockList extends React.Component {

    constructor(props){
        super(props);
        this.handleChangeQty = this.handleChangeQty.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
    }

    handleChangeQty(event){
        this.props.changeQty(event.target.name, event.target.value);
    }

    handleChangePrice(event){
        this.props.changePrice(event.target.name, event.target.value);
    }

    render(){
        return (
            <div>
                <div>
                    <input type="text" name="qty1" value={this.props.quantity} onChange={this.handleChangeQty}></input>
                </div>
                <div>
                    <input type="text" name="price1" value={this.props.price} onChange={this.handleChangePrice}></input>
                </div>
            </div>
        )
    }
}

export default StockList;

