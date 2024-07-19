import { useContext } from "react";
import StockContext from "../contexts/StockContext";
import './StockList.css'

function StockDetails({symbol, quantity, purchasePrice, currentPrice}){
  let profit = ((currentPrice-purchasePrice)*quantity).toFixed(2);
  let profitClass = "equal";

  if (profit > 0){
    profitClass = "profit";
  }
  else if (profit < 0){
    profitClass = "loss";
  }

  return (<>
    <li className="stock-details">
      <h3>{symbol}</h3>
      <p>Quantity: {quantity}</p>
      <p>Purchase Price: {purchasePrice}</p>
      <p>Current Price: {currentPrice}</p>
      <p>Profit/Loss: <span className={profitClass}>{profit}</span></p>
    </li>
  </>)
}

function StockList(){
    const { stockList } = useContext(StockContext);

    console.log("Stock list", stockList);

    if (stockList.length == 0){
      return <>
        <p>Add a stock to get started!</p>
      </>
    }
    
    return <ul className="stock-list">
      {stockList.map((value, index) => (<StockDetails key={index} symbol={value.symbol} quantity={value.quantity} purchasePrice={value.purchasePrice} currentPrice={value.currentPrice}/>))}
  </ul>
}

export default StockList