import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-badlands-93133.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="p-5" id="services">
            <div className="container">
                <h2 className="text-center mb-5">Most Popular Watches For Man</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.slice(0, 6).map(product => <SingleProduct
                            key={product._id}
                            product={product}
                        ></SingleProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;