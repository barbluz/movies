import React from 'react';
import classes from './Layout.module.css';
import Search from '../Search/Search';
import MovieDetail from '../Movies/MovieDetail/MovieDetail';

const layout = (props) => (
  <div>
    <header>Movies</header>
    <main>
        <MovieDetail />
        <Search />
      {props.children}
    </main>
    <div>Pagination</div>
  </div>
);

export default layout;
