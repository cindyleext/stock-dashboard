import React from "react";
import { useContext } from "react";
import "./StockInputForm.css";
import StockContext from "../contexts/StockContext";

function StockInputForm(){
    const { setInputValue, setStockList, stockList } = useContext(StockContext);

    const handleClick = (event) => {
        event.preventDefault(); 
        console.log(event);
        console.log(event.target);
        console.log("Stock", event.target[0].value);
        console.log("Quantity", event.target[1].value);
        console.log("Price", event.target[2].value);

        if (!event.target[0].value){
            alert('Please enter a stock!');
            return;
        }

        if (event.target[1].value && isNaN(event.target[1].value)){
            console.log("Invalid quantity");
            alert('Invalid quantity!');
            return;
        }

        if (!event.target[2].value){
            console.log("Price is empty!");
            alert('Please enter a price');
            return;
        }

        if (isNaN(event.target[2].value)){
            alert('Invalid price!');
            return;
        }

        setInputValue({
            symbol: event.target[0].value,
            quantity: event.target[1].value? event.target[1].value : 100,
            purchasePrice: parseFloat(event.target[2].value).toFixed(2)
          });

          event.target[0].value = '';
          event.target[1].value = '';
          event.target[2].value = '';
        // console.log("Add stock", stockDetails);
        // setStockList([...stockList, stockDetails]);
    };

    return (
        <form onSubmit={handleClick} className="stock-input-form">
            <input placeholder="Stock Name"></input>
            <input placeholder="Quantity (Default: 100)"></input>
            <input placeholder="Price"></input>
            <input type="submit" value="Add Stock"></input>
        </form>
    )
}

export default StockInputForm;