// Code MovieReviews Here
import React, { Component } from 'react';


const MovieReviews = (props) => {

  return (
    <div className="review-list">
      {props.reviews.map((review, index) =>
        <div key={index} className= "review">
          <h2>{review.headline}</h2>
          <h3>{review.byline}</h3>
          <h4>{review.link.url}</h4>
          <h4>{review.summary_short}</h4>
        </div>)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
