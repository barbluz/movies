import React, { Component } from 'react';
import classes from './Search.module.css';
import Movies from '../Movies/Movies';
import API from '../Api';

class Search extends Component {

  state = {
    movies: [],
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
      let movies = response.data.results.slice(0, 5);
      console.log(movies)
      this.setState({movies: movies});
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

  render() {
    return(
      <div className={classes.Container}>
        <input type="text" required onKeyDown={(event) => this.searchMovies(event) }/>
        <label> Busque um filme </label>

        <Movies movies={this.state.movies} />
      </div>
      );
  }

};

export default Search;
