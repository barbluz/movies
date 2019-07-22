import React, { Component } from 'react';
import classes from './Pagination.module.css';

class Pagination extends Component {
  render() {
    const pageNumbers = [];

    for(let i = 1; i < Math.ceil(this.props.totalResults / this.props.resultsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className={classes.Container}>
          {pageNumbers.map(number => (
          <li className={(this.props.currentPage === number)? (classes.Item, classes.Active) : classes.Item}
            key={number}
            onClick={() => this.props.paginate(number)}>
            {number}
          </li>
          ))}
        </ul>
      </nav>
      );
  }
}

export default Pagination;
