import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import StockList from './components/StockList';
import StockInputForm from './components/StockInputForm';
// import './App.css'

function FinanceDashboard(){
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
    console.log("Add stock", value);
    setItems([...items, value]);
  };

  return (<>
  <h1>Finance Dashboard</h1>
  <div>
    <StockInputForm onInputChange={handleInputChange}/>
    <StockList items={items}/>
  </div>
  </>);
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FinanceDashboard/>
    </>
  )
}

export default App
