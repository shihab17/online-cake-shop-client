import React from 'react';
import AddCake from '../AddCake/AddCake';
import AddOrder from './AddOrder/AddOrder';

const Admin = () => {
    return (
        <div className="row m-3 p-2 bg-light shadow rounded">
            <ul className="nav nav-pills mb-3  rounded" id="pills-tab" role="tablist" >
                <li className="nav-item">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Manage</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Add Item</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Add Order</a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet cum sunt dolorem velit optio voluptatum vero molestias quis ipsa corrupti. Sequi laboriosam optio assumenda rerum perspiciatis sit quidem quasi itaque.</p>
                    <AddCake></AddCake>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis ipsum praesentium quas fugiat, asperiores consectetur facere id labore deleniti, iure adipisci aut esse odio vitae, ducimus similique laborum ab.</p>
                   <AddOrder ></AddOrder>
                </div>
            </div>
        </div>
    );
};

export default Admin;