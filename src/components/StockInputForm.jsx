import React from "react";

function StockInputForm({ onInputChange }){
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


        onInputChange([event.target[0].value, event.target[1].value, event.target[2].value]);
    };

    return (
        <form onSubmit={handleClick}>
            <p>Stock Name</p>
            <input placeholder="Stock Name"></input>
            <p>Quantity</p>
            <input placeholder="Quantity"></input>
            <p>Price</p>
            <input placeholder="Price"></input>
            <input type="submit" value="Add Stock"></input>
        </form>
    )
}

export default StockInputForm;