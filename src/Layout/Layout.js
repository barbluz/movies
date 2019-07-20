import React from 'react';
import classes from './Layout.module.css';

const layout = (props) => (
  <div>
    <header>Movies</header>
    <main>
      {props.children}
    </main>
    <div>Pagination</div>
  </div>
);

export default layout;
