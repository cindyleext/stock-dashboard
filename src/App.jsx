import { useState, useEffect, useCallback } from 'react'
import StockList from './components/StockList';
import StockInputForm from './components/StockInputForm';
import './App.css'
import StockContext from './contexts/StockContext';

// Mock data
// import fakestock from "./components/fakestock.json";

function App() {
  const [inputStockDetails, setInputValue] = useState(null);
  const [stockList, setStockList] = useState([]);// useState([["AMD", 30, 100], ["TSLA", 30, 100]]);

  const fetchStockPrice = useCallback((symbol) => {
    return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=P1Y8OBG4EMX31L94`)
    .then((res) => res.json())
  }, []);

  useEffect(() => {
    if (inputStockDetails == null){
      return;
    }

    const symbol = inputStockDetails.symbol

    // console.log("Update prices")

    // Fetch new stock details and append to list
    fetchStockPrice(symbol).then((data) => {
          console.log("Result of query for", symbol);
          console.log(data)

          if (!("Global Quote" in data) || !("05. price" in data["Global Quote"])){
            alert("Stock ticker does not exist. Please try another stock");
            return;
          }
          let currentPrice = parseFloat(data["Global Quote"]['05. price']);
          // stocks[stock] = currentPrice;
          console.log(`Stock: ${symbol}, currentPrice ${currentPrice}`);

          const stockDetails = {
            ...inputStockDetails,
            currentPrice: currentPrice
          };

          //fetch current price for stocks in list as well.
          stockList.map((stock) => {
            let symbol = stock.symbol;
            fetchStockPrice(symbol).then((data) => {
              console.log("Result of query for", symbol);
              console.log(data)
      
              if (!("Global Quote" in data) || !("05. price" in data["Global Quote"])){
                console.warn(`Unable to retrieve new stock details for ${stock} that is already on the list.`)
                // alert("Stock ticker does not exist. Please try another stock");
                return;
              }
      
              stock.currentPrice = parseFloat(data["Global Quote"]['05. price']);
            })
          })

          setStockList([...stockList, stockDetails]);
    })
  }, [inputStockDetails, fetchStockPrice]);

  return (
    <div className='Dashboard'>
    <StockContext.Provider 
      value={{
        inputStockDetails,
        setInputValue,
        stockList,
        setStockList
      }}>
      <h1>Finance Dashboard</h1>
      <StockInputForm/>
      <StockList/>
      </StockContext.Provider>
    </div>
  )
}

export default App
