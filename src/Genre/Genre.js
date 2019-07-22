import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import classes from './Genre.module.css';
import API from '../Api';
import Pagination from '../Pagination/Pagination'

class Genre extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      genreId: this.props.match.params.id,
      totalResults: 0,
      currentPage: 1,
      resultsPerPage: 5
    }
  }


  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    API.get('/discover/movie', {
      params: {
        api_key: 'a4cab92d173bcd8046c8dbf93bb0661b',
        language: 'pt-BR',
        sort_by: 'popularity.desc',
        include_adult: false,
        with_genres: this.state.genreId
      }
    }).then( response => {
      let movies = response.data.results;
      this.setState({movies: movies, totalResults: movies.length});
    });
  }

  paginate(number) {
    this.setState({currentPage: number});
  }

  render() {
    const lastMovieIndex = this.state.currentPage * this.state.resultsPerPage;
    const firstMovieIndex = lastMovieIndex - this.state.resultsPerPage;
    const currentMovies = this.state.movies.slice(firstMovieIndex, lastMovieIndex);

    return(
      <div className={classes.Container}>
        <Movies movies={currentMovies} />

        <Pagination
          resultsPerPage={this.state.resultsPerPage}
          totalResults={this.state.totalResults}
          paginate={this.paginate.bind(this)}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default Genre;
