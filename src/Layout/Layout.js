import React from 'react';
import classes from './Layout.module.css';
import Search from '../Search/Search';

const layout = (props) => (
  <div>
    <header>Movies</header>
    <main>
        <Search />
      {props.children}
    </main>
    <div>Pagination</div>
  </div>
);

export default layout;
