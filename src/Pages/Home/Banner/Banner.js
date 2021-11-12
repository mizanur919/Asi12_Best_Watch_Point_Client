import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade style={{ minHeight: "600px" }}>
                <Carousel.Item>
                    <img height="600px"
                        className="d-block w-100"
                        src="https://i.ibb.co/Sv3Drb9/1.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <>
                            <h3>Black MKV-450 Man Watch</h3>
                            <p>Best one for special person</p>
                        </>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height="600px"
                        className="d-block w-100"
                        src="https://i.ibb.co/vvVgwr8/2.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <>
                            <h3>Brown BRO-670 Watch For Man</h3>
                            <p>Just For Professional Only</p>
                        </>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height="600px"
                        className="d-block w-100"
                        src="https://i.ibb.co/q0H2grJ/3.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <>
                            <h3>Black Panther Man Watch</h3>
                            <p>Fashionable And Fabulous Watch</p>
                        </>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;