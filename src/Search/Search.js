import React, { Component } from 'react';
import classes from './Search.module.css';
import Movies from '../Movies/Movies';

class Search extends Component {

  render() {
    return(
      <div className={classes.Container}>
        <input type="text" required />
        <label> Busque um filme </label>

        <Movies />
      </div>
    );
  }

};

export default Search;
