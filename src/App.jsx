import { useState } from 'react'
import StockList from './components/StockList';
import StockInputForm from './components/StockInputForm';
import './App.css'
import StockContext from './contexts/StockContext';

function App() {
  const [inputValue, setInputValue] = useState([]);
  const [stockList, setStockList] = useState([["AMD", 30, 100], ["TSLA", 30, 100]]);

  return (
    <>
    <StockContext.Provider 
      value={{
        inputValue,
        setInputValue,
        stockList,
        setStockList
      }}>
      <h1>Finance Dashboard</h1>
      <StockInputForm/>
      <StockList/>
      </StockContext.Provider>
    </>
  )
}

export default App
