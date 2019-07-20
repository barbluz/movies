import React, { Component } from 'react';
import classes from './Search.module.css';

class Search extends Component {

  render() {
    return(
      <div className={classes.Container}>
        <input type="text" required />
        <label> Busque um filme por nome, ano ou gênero
        </label>
      </div>
    );
  }

};

export default Search;
