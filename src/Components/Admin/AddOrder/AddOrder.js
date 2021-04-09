import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddOrder = () => {
    // const { register, handleSubmit } = useForm();
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    const [order, setOrder] = useState({
        customerName: '',
        customerPhoneNumber: '',
        deliveryDAte: '',
        cakeName: '',
        weight: 0,
        totalCost: 0,
        discount: 0,
        dateTime:''

    })
    const [cake, setCake] = useState([]);
    const [price, setPrice] = useState([]);
    const [total, setTotal] = useState(0)
    console.log("Order", order)
    useEffect(() => {
        fetch(`https://online-cake-shop.herokuapp.com/cakes`)
            .then(res => res.json())
            .then(data => setCake(data))
    }, [])
    // console.log(cake)
    const handleSelect = () => {
        console.log("clicked")
        const orderCakeId = document.getElementById('orderCakeName').value;
        fetch(`https://online-cake-shop.herokuapp.com/cakes/${orderCakeId}`)
            .then(res => res.json())
            .then(data => setPrice(data[0].cakePrice))

    }
    const handleWeight = event => {
        const cakWeight = event.target.value;
        let discount = document.getElementById('discount').value;
        if (discount === '') {
            discount = 0
        }
        let sum = price * parseFloat(cakWeight);
        document.getElementById('totalAmount').value = sum - parseFloat(discount);
        setTotal(sum - parseFloat(discount))
    }
    const handleDiscount = event => {
        let discount = event.target.value;
        if (discount == '') {
            discount = 0;
        }
        const amount = document.getElementById('totalAmount').value;
        const sum = total - parseInt(discount);
        document.getElementById('totalAmount').value = sum;
    }
    // const onSubmit = data => console.log(data);
    const handleSubmit = e => {
        setOrder({
            customerName: document.getElementById('customerName').value,
            customerPhoneNumber: document.getElementById('customerPhoneNumber').value,
            deliveryDAte: document.getElementById('deliveryDate').value,
            cakeName: document.getElementById('orderCakeName').value,
            weight: document.getElementById('cakeWeight').value,
            totalCost: document.getElementById('totalAmount').value,
            discount: document.getElementById('discount').value,
            dateTime: dateTime
        })
        const orderData = {
            customerName: document.getElementById('customerName').value,
            customerPhoneNumber: document.getElementById('customerPhoneNumber').value,
            deliveryDAte: document.getElementById('deliveryDate').value,
            cakeName: document.getElementById('orderCakeName').value,
            weight: document.getElementById('cakeWeight').value,
            totalCost: document.getElementById('totalAmount').value,
            discount: document.getElementById('discount').value,
            dateTime: dateTime
        }
        fetch('https://online-cake-shop.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => {
                document.getElementById('customerName').value = "";
                document.getElementById('customerPhoneNumber').value = "";
                document.getElementById('deliveryDate').value = '';
                document.getElementById('orderCakeName').value = '';
                document.getElementById('cakeWeight').value = '';
                document.getElementById('totalAmount').value = '';
                document.getElementById('discount').value = '';
                // setOrder({
                //     customerName: '',
                //     customerPhoneNumber: '',
                //     deliveryDAte: '',
                //     cakeName: '',
                //     weight: 0,
                //     totalCost: 0,
                //     discount: 0,
                //     dateTime:''
                // })
                console.log('server response', res)
                console.log(order)
            })
        e.preventDefault();
    }
    return (
        <div >
            <form className="m-5" action="" onSubmit={handleSubmit}>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label htmlFor="customerName">Customer Name: </label>
                        <input className="form-control" type="text" name="customerName" id="customerName" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="customerPhoneNumber">Customer Phone Number: </label>
                        <input className="form-control" type="text" name="customerPhoneNumber" id="customerPhoneNumber" required />
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="deliveryDate">Delivery Date </label>

                        <input className="form-control" type="date" name="deliveryDate" id="deliveryDate" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor=""> Select Cake </label>
                        <select className="form-control" id="orderCakeName" onClick={handleSelect} >
                            {
                                cake.map(cake => <option value={cake._id}>{cake.cakeName}</option>)
                            }
                        </select>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="cakeWeight">Weight</label>
                        <input className="form-control" type="text" onChange={handleWeight} name="cakeWeight" id="cakeWeight" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="totalAmount">Total Cost</label>
                        <input className="form-control" type="text" name="totalAmount" id="totalAmount" disabled />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="discount"> Discount </label>
                        <input className="form-control" type="text" onChange={handleDiscount} name="discount" id="discount" />
                    </div>
                </div>
                <div className="row">
                    <input className="btn btn-lg btn-info m-3 " type="submit" value="Add Order" />
                </div>
            </form>
        </div>
    );
};

export default AddOrder;