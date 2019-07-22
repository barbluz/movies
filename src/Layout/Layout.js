import React from 'react';
import classes from './Layout.module.css';
import Search from '../Search/Search';
import MovieDetail from '../Movies/MovieDetail/MovieDetail';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const layout = (props) => (
  <BrowserRouter>
    <header><Link to="/"> Movies</Link></header>
    <main>
        <Route path="/" exact component={Search} />
        <Route path='/movie/:id' exact component={MovieDetail} />
    </main>
    <div>Pagination</div>
  </BrowserRouter>
);

export default layout;
