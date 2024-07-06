import { useContext } from "react";
import StockContext from "../contexts/StockContext";
import './StockList.css'

function StockDetails({symbol, quantity, value}){
  return (<>
    <li className="stock-details">
      <p>Symbol: {symbol}</p>
      <p>Quantity: {quantity}</p>
      <p>Profit: {value}</p>
    </li>
  </>)
}

function StockList(){
    const { stockList } = useContext(StockContext);

    console.log("Stock list", stockList);
    return <ul className="stock-list">
      {stockList.map((value) => (<StockDetails symbol={value[0]} quantity={value[1]} profit={value[2]}/>))}
  </ul>
}

export default StockList