import React, { Component } from 'react';
import StockList from './StockList'

import './AverageCalculator.css';

class AverageCalculator extends React.Component {

    constructor(props){
        super(props);

        this.change = this.change.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    change(event) {
        alert("change...")
    }

    handleSubmit(event){
        event.preventDefault();
        alert("Success...")
    }

    render() {
        return (
            <div className="average-calculator">
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="stock-price-list">
                            <h3>Stock Average Calculator</h3>
                            <div className="list-heading">
                                <div>
                                    <h5>Stocks Purchased</h5>
                                </div>
                                <div>
                                    <h5>Unit Price</h5>
                                </div>
                            </div>
                            {[1, 2, 3].map(ls => <StockList change={this.change}/>)}
                            <div className="btn-container">
                                <button>Calculate</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AverageCalculator;