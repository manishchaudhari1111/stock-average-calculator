// import React, { Component, useState } from 'react';
// import StockList from './StockList'

// import './AverageCalculator.css';

// const AverageCalculator = () => {

//     change(event) {
//         alert("change...")
//     }

//     handleSubmit(event){
//         event.preventDefault();
//         alert("Success...")
//     }

//     return (
        // <div className="average-calculator">
        //     <form onSubmit={this.handleSubmit}>
        //         <div className="container">
        //             <div className="stock-price-list">
        //                 <h3>Stock Average Calculator</h3>
        //                 <div className="list-heading">
        //                     <div>
        //                         <h5>Stocks Purchased</h5>
        //                     </div>
        //                     <div>
        //                         <h5>Unit Price</h5>
        //                     </div>
        //                 </div>
        //                 {[1, 2, 3].map(ls => <StockList change={this.change}/>)}
        //                 <div className="btn-container">
        //                     <button>Calculate</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </form>
        // </div>
//     );
// }

// export default AverageCalculator;

import React, {useState} from 'react';
import StockList from './StockList';

import './AverageCalculator.css';


const AverageCalculator = () => {

    const [stockQty, addToStockQuantity] = useState({});
    const [stockPrice, addToStockprice] = useState({});

    const changeQty = (name, qty) => {
        addToStockQuantity({...stockQty, [name]: qty});
        console.log("stockQty", stockQty); 
    }

    const changePrice = (name, price) => {
        addToStockprice({...stockPrice, [name]: price});
        console.log("stockPrice", stockPrice); 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Success...")
    }

    return (
        <div className="average-calculator">
            <form onSubmit={handleSubmit}>
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
                        {[1, 2, 3].map(ls => <StockList key={ls} quantity={stockQty[`qty${ls}`]} price={stockPrice[`price${ls}`]} changeQty={changeQty} changePrice={changePrice}/>)}
                        <div className="btn-container">
                            <button>Calculate</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AverageCalculator
