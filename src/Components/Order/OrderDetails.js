import React, { useEffect, useState } from 'react';

const OrderDetails = (props) => {
    const [cake, setCake] = useState({})
    const { _id, customerName, customerPhoneNumber, deliveryDAte, cakeName, dateTime, weight, totalCost, discount } = props.order;
    useEffect(() => {
        fetch(`https://online-cake-shop.herokuapp.com/cakes/${cakeName}`)
            .then(res => res.json())
            .then(data => setCake(data[0]))
    }, [cakeName])
    const handleOrder = (orderId) => {
        console.log("clicked", orderId)
        fetch(`https://online-cake-shop.herokuapp.com/order/${orderId}`)
            .then(res => res.json())
            .then(data => {
                fetch(`https://online-cake-shop.herokuapp.com/customer`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data[0])
                })
                    .then(res => {
                        console.log(res)
                        fetch(`https://online-cake-shop.herokuapp.com/deleteOrder/${orderId}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(result => console.log(result))
                    })
            })

    }

    const handleCancelOrder = (orderId) => {
        console.log("cancel", orderId)
    }

    return (
        <div className="col-md-3 ">
            <div className="card shadow m-3 bg-light" >
                <div className="card-body">
                    <h5 className="card-title text-center">{cake.cakeName}</h5>
                    <h6 className="text-center text-muted"> Delivery Date: {deliveryDAte}</h6>
                    <p className="card-text p-2">
                        <h5>
                            Customer Information
                        </h5>
                        <table class="table table-striped table-success table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th scope="col"> Name</th>
                                    <th scope="col">Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{customerName}</td>
                                    <td>{customerPhoneNumber}</td>
                                </tr>

                            </tbody>
                        </table>
                        <div className="card bg-light mb-3">
                            <div className="card-header">Order Summary</div>
                            <div className="card-body">
                                <p className="card-text">
                                    <div className="row border">
                                        <div className="col ">
                                            Weight
                                        </div>
                                        <div className="col text-right border">
                                            {weight}
                                        </div>
                                    </div>
                                    <div className="row border">
                                        <div className="col ">
                                            Unit Price
                                        </div>
                                        <div className="col text-right border">
                                            {cake.cakePrice}
                                        </div>
                                    </div>
                                    <div className="row border">
                                        <div className="col ">
                                            Sub Total
                                        </div>
                                        <div className="col text-right border">
                                            {cake.cakePrice * weight}
                                        </div>
                                    </div>
                                    <div className="row border">
                                        <div className="col ">
                                            Discount
                                        </div>
                                        <div className="col text-right border">
                                            {
                                                discount ? discount : 0
                                            }
                                        </div>
                                    </div>
                                    <div className="row border">
                                        <div className="col">
                                            Total
                                        </div>
                                        <div className="col text-right border">
                                            {totalCost}
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </p>
                    <div className="row">
                        <div className="col-6"><button className="btn btn-success" onClick={() => handleOrder(_id)}>Place Order</button></div>
                        <div className="col-6 text-right"> <button className="btn btn-danger " onClick={() => handleCancelOrder(_id)}>Cancel Order</button></div>
                    </div>


                    <br /> <small className="text-muted p-2 "> Order ID: {_id}</small> <br />
                    <small className="text-muted p-2">Order Time: {dateTime}</small>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;