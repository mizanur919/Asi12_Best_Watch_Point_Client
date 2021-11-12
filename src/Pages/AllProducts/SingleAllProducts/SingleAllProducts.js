import React from 'react';
import { Link } from 'react-router-dom';

const SingleAllProducts = ({product}) => {
    const {_id, title, img, price, description} = product;
    return (
        <div className="col">
            <div className="card h-100 pb-3">
                <img src={img} style={{width: '200px', height: 'auto'}} className="card-img-top mx-auto" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="d-flex justify-content-around">
                    <Link to={`/productDetails/${_id}`} className="btn btn-danger text-white">View Details</Link>
                    <Link className="btn btn-danger text-white"><i class="far fa-heart"></i> Favorite</Link>
                    {/* <button onClick={() => {
                        user.uid
                            ?
                            addToCart(service)
                            :
                            history.push('/login');
                    }}>Book Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default SingleAllProducts;