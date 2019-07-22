import React, { Component } from 'react';
import classes from './Movies.module.css';
import MovieItem from './MovieItem/MovieItem';
import API from '../Api';

class Movies extends Component {
  render() {
    let movies = null;

    movies = this.props.movies.map(movie => {
      return <MovieItem
        title={movie.title}
        overview={movie.overview}
        voteAverage={movie.vote_average}
        releaseDate={movie.release_date}
        genreIds={movie.genre_ids}
        posterPath={movie.poster_path}
        key={movie.id} />
      })

    return(
      <div className={classes.Container}>
        {movies}
      </div>
      );
  }
}


export default Movies;
