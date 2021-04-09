import React from 'react';
import { useForm } from 'react-hook-form';

const AddCake = () => {
    const { register, handleSubmit } = useForm();
    const onSubmitCake = data => {
        console.log(data)
        const cakeData = {
            cakeName: data.cakeName,
            cakePrice: data.cakePrice
        }
        fetch('https://online-cake-shop.herokuapp.com/addCake', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cakeData)
        })
        .then(res => {
            document.getElementById('cakeName').value="";
            document.getElementById('cakePrice').value="";
            console.log('server response', res)
        })
    };
    return (
        <div >
            <form className="m-5" action="" onSubmit={handleSubmit(onSubmitCake)}>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label htmlFor="">Cake Name: </label>
                        <input className="form-control" type="text" {...register("cakeName")} name="cakeName" id="cakeName" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="">Price </label>
                        <input className="form-control" {...register("cakePrice")} type="number" name="cakePrice" id="cakePrice" />
                    </div>
                </div>
                <div className="row form-group">
                    <input className=" btn btn-lg btn-info m-3" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddCake;