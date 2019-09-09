import React, { Component } from 'react';

class StockList extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.change();
    }

    render(){
        return (
            <div>
                <div>
                    <input type="text" name="qty1" value="" onChange={this.handleChange}></input>
                </div>
                <div>
                    <input type="text" name="price1" value="" onChange={this.handleChange}></input>
                </div>
            </div>
        )
    }
}

export default StockList;

