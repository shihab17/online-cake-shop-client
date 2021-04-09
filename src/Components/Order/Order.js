import React, { useEffect, useState } from 'react';
import OrderDetails from './OrderDetails';

const Order = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://online-cake-shop.herokuapp.com/order`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    console.log(orders)
    return (
       <div className="row">
           {
               orders.map(order => <OrderDetails order={order} key={order._id}></OrderDetails>)
           }
       </div>
    );
};

export default Order;