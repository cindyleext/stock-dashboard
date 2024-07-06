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

        if (!event.target[2].value){
            console.log("Price is empty!");
        }

        console.log("Price", event.target[2].value);

        const stockDetails = [event.target[0].value, event.target[1].value, event.target[2].value]
        setInputValue(stockDetails);
        console.log("Add stock", stockDetails);
        setStockList([...stockList, stockDetails]);
    };

    return (
        <form onSubmit={handleClick} className="stock-input-form">
            <input placeholder="Stock Name"></input>
            <input placeholder="Quantity"></input>
            <input placeholder="Price"></input>
            <input type="submit" value="Add Stock"></input>
        </form>
    )
}

export default StockInputForm;