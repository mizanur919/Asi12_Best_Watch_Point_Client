import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`https://safe-badlands-93133.herokuapp.com/order`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);

    return (
        <>
            <div className="container">
                <div className="row my-4">
                    <h4 className="text-center mb-4">Manage All Orders</h4>
                    <table className="table bordered">
                        <thead className="thead-dark">
                            <tr>
                                {/* <th>#</th> */}
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Shipping Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrders.map(singleOrder => <tr
                                    key={singleOrder._id}
                                >
                                    {/* <th>1</th> */}
                                    <td>{singleOrder.title}</td>
                                    <td>{singleOrder.price}</td>
                                    <td><img style={{ width: '100px', height: 'auto' }} src={singleOrder.img} alt="" /></td>
                                    <td>{singleOrder.status}</td>
                                    <td><Button>Confirm</Button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageAllOrders;