import React from 'react';
import classes from './Movies.module.css';
import MovieItem from './MovieItem/MovieItem';

const movies = (props) => (
  <div className={classes.Container}>
    <MovieItem />
    <MovieItem />
    <MovieItem />
    <MovieItem />
    <MovieItem />
    <MovieItem />
  </div>
);

export default movies;
