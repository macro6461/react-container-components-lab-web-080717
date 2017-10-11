// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
  constructor(){
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(BASE_URL.concat(this.state.searchTerm))
    .then(response => response.json())
    .then(response => this.setState({reviews: response.results}))
  }

  render(){
    return <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="search" onChange={this.handleChange} value={this.searchTerm} />
                <input type="submit" value="Submit" />
            </form>
            {this.state.reviews.length > 0 && <h2>Search Results:</h2>}
            <MovieReviews reviews={this.state.reviews} />
    </div>
  }
}

export default SearchableMovieReviewsContainer;
