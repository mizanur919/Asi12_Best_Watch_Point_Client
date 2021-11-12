import React, { useState } from 'react';
import Rating from 'react-rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    fetch('https://safe-badlands-93133.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    return (

        <div className="container my-4">
            <h4 className="text-center my-5">Our Happy Client Reviews</h4>
            <div className="row row-cols-3 row-cols-md-3 g-4">
                {
                    reviews.slice(0, 3).map(singleReview => <div
                        key={singleReview._id}
                        style={{ minHeight: "300px" }}
                        className="col"
                    >
                        <div className="card py-4">
                            <div className="card-body text-center">
                                <h5 className="card-title">{singleReview.userReview}</h5>
                                <Rating
                                    initialRating={singleReview.rating}
                                    readonly
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                />
                                <p>By {singleReview.name}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default Reviews;