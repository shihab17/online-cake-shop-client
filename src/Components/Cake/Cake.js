import React, { useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const Cake = () => {
    const [cake, setCake] = useState([]);
    useEffect(() => {
        fetch(`https://online-cake-shop.herokuapp.com/cakes`)
            .then(res => res.json())
            .then(data => setCake(data))
    }, []);
    const handleEdit = cakeId => {
        console.log("clicked",cakeId)
    }
    const handleDelete = cakeId => {
        console.log("deleted",cakeId)
    }
    return (
        <div className="row m-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Cake Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cake.map(cake =>
                            <tr>
                                <td>{cake.cakeName}</td>
                                <td>{cake.cakePrice}</td>
                                <td>
                                    <EditIcon className="bg-info text-white border rounded m-1 p-1" onClick={() => handleEdit(cake._id)}></EditIcon>
                                    <DeleteIcon className="bg-danger text-white border rounded m-1 p-1" onClick={() => handleDelete(cake._id)} ></DeleteIcon>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Cake;