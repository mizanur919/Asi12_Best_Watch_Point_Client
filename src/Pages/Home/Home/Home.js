import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Subscription from '../Subscription/Subscription'
import Reviews from '../Reviews/Reviews'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Subscription></Subscription>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;