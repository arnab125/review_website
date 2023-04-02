import React from 'react';
import reviewsData from './data.json';
import './reviews.css';

function Reviews() {
  return (
    <div className="reviews-container">
      <h1>Reviews</h1>
      {reviewsData.map((review) => (
        <div key={review.id} className="review">
          <img src={review.photo} alt={review.name} className="review-photo" />
          <div className="review-details">
            <h2 className="review-name">{review.name}</h2>
            <p className="review-text">{review.review}</p>
            <p className="review-rating">Rating: {review.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
