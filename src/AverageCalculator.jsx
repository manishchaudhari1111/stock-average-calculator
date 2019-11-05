import React, {useState} from 'react';
import StockList from './StockList';

import './AverageCalculator.css';


const AverageCalculator = () => {

    const [numberOfInputs, addInputsRow] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [stockQty, addToStockQuantity] = useState({});
    const [stockPrice, addToStockprice] = useState({});
    const [averageAndNumOfStocks, totalstocks] = useState({});

    const changeQty = (name, qty) => {
        addToStockQuantity({...stockQty, [name]: qty});
    }

    const changePrice = (name, price) => {
        addToStockprice({...stockPrice, [name]: price});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let totalNumberOfStocks = 0;
        let totalPrice = 0;
        numberOfInputs.forEach(element => {
            if (stockQty[`qty${element}`] && stockPrice[`price${element}`]){
                totalNumberOfStocks += Number(stockQty[`qty${element}`]);
                totalPrice += Number(stockPrice[`price${element}`]) * Number(stockQty[`qty${element}`]);
            } 
        });
        var average = totalPrice / totalNumberOfStocks;
        totalstocks({...averageAndNumOfStocks, average, totalNumberOfStocks});
        
    }

    return (
        <div className="main-container">
            <div className="stock-average-calculator">
                <h2 className="main-heading">Stock Average Calculator</h2>
                <div className="sub-heading">
                    <h3>Stock Quantity</h3>
                    <h3>Stock Price / Share</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group-list">
                        {numberOfInputs.map(ls => <StockList key={ls} num={ls} quantity={stockQty[`qty${ls}`]} price={stockPrice[`price${ls}`]} changeQty={changeQty} changePrice={changePrice}/>)}
                        <div className="input-group">
                            <button>Calculate</button>
                        </div>
                    </div>
                </form>
                <div className="total-average-display">
                    <div className="sub-heading">
                        <h3>Total No. of Shares</h3>
                        <h3>Average Price / Share</h3>
                    </div>
                    <div className="sub-heading result">
                        <h3>{averageAndNumOfStocks.totalNumberOfStocks > 0 ? averageAndNumOfStocks.totalNumberOfStocks : '--'}</h3>
                        <h3><span className="inr-symbol">₹</span>{averageAndNumOfStocks.average > 0 ? Math.round(averageAndNumOfStocks.average) !== averageAndNumOfStocks.average ? averageAndNumOfStocks.average.toFixed(4) : averageAndNumOfStocks.average : '--'}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AverageCalculator
