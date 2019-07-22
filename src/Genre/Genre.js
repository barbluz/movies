import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import classes from './Genre.module.css';
import API from '../Api';

class Genre extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      genreId: this.props.match.params.id
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
      let movies = response.data.results.slice(0, 5);
      this.setState({movies: movies});
    });
  }

  render() {
    return(
      <div className={classes.Container}>
        <Movies movies={this.state.movies} />
      </div>
      );
  }
}

export default Genre;
