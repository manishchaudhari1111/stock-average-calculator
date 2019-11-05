import React from 'react';

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
            <div className="input-group">
                <input className="form-input" onChange={this.handleChangeQty} type="text" name={`qty${this.props.num}`} value={this.props.quantity} />
                <input className="form-input" onChange={this.handleChangePrice} type="text" name={`price${this.props.num}`} value={this.props.price} />
            </div>
        )
    }
}

export default StockList;

