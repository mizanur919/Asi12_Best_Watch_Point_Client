import React, { useEffect, useState } from 'react';
import SingleProduct from '../../Home/SingleProduct/SingleProduct';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SingleAllProducts from '../SingleAllProducts/SingleAllProducts';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-badlands-93133.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, []);
    return (
        <>
            <Header></Header>
            <div className="p-5" id="services">
                <div className="container">
                    <h2 className="text-center mb-5">All Products</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            allProducts.map(product => <SingleAllProducts
                                key={product._id}
                                product={product}
                            ></SingleAllProducts>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AllProducts;