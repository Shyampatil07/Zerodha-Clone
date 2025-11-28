import React , { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

useEffect(() => {
  axios.get("http://localhost:3002/newOrder").then((res) =>{
      console.log(res.data);
      setAllOrders(res.data);
  });
}, []);


  return (

    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
  

 <h3 className="title">Holdings ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
            
          </tr>
          name: String,
    qty: Number,
    price: Number,
    mode: String,

              {allOrders.map((stock, index) => {
           
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
               
              </tr>
            );
          })}

          </table>
          </div>
  </div>
  );
};

export default Orders;