import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component{
  constructor(){
    super();
    this.state = {
      reviews: []
    }
  }
  componentWillMount(){
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=671c74c788414865ba17115524a1a1d2')
    .then(response => response.json())
    .then(reviews => this.setState({reviews: reviews.results}))
  }
  render(){
    return <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
    </div>
  }
}
