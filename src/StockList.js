import React from 'react';

class StockList extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props);
        
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
                <input className="form-input" name={`qty${this.props.num}`} value={this.props.quantity} onChange={this.handleChangeQty}/>
                <input className="form-input" type="text" name={`price${this.props.num}`} value={this.props.price} onChange={this.handleChangePrice} />
            </div>
        )
    }
}

export default StockList;

