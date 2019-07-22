import React, { Component } from 'react';
import classes from './Search.module.css';
import Movies from '../Movies/Movies';
import API from '../Api';
import Pagination from '../Pagination/Pagination'

class Search extends Component {

  state = {
    movies: [],
    totalResults: 0,
    currentPage: 1,
    resultsPerPage: 5
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
        include_adult: false
      }
    }).then( response => {
      let movies = response.data.results;
      this.setState({movies: movies, totalResults: movies.length});
      console.log(this.state)
    });
  }

  searchMovies(event) {
    if(event.keyCode === 13) {
      let query = event.target.value;

      API.get('/search/movie', {
        params: {
          api_key: 'a4cab92d173bcd8046c8dbf93bb0661b',
          language: 'pt-BR',
          sort_by: 'popularity.desc',
          include_adult: false,
          query: query
        }
      }).then( response => {
        let movies = response.data.results.slice(0, 5);
        this.setState({movies: movies});
      });
    }
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
        <input type="text" required onKeyDown={(event) => this.searchMovies(event) }/>
        <label> Busque um filme </label>

        <Movies movies={currentMovies} />
        <Pagination
                resultsPerPage={this.state.resultsPerPage}
                totalResults={this.state.totalResults}
                paginate={this.paginate.bind(this)}
              />
      </div>
      );
  }

};

export default Search;
