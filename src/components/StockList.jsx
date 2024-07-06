import { useState, useEffect } from "react";

function StockList({items}){
    console.log("Stock list", items);
    return <ul>
    <li>
      <p>Stock</p> {/* Should I put this in separate div? */}
      <p>AMD</p>{/* Should I use p or table or ul or li? */}
      <p>Quantity</p>
      <p>30</p>
      <p>Profit</p>
      <p>100</p>
    </li>
    <li>
      <p>Stock</p> {/* Should I put this in separate div? */}
      <p>TSLA</p>{/* Should I use p or table or ul or li? */}
      <p>Quantity</p>
      <p>10</p>
      <p>Profit</p>
      <p>100</p>
    </li>
  </ul>
}

export default StockList