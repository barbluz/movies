import React from 'react';
import Tag from './Tag/Tag';
import classes from './Tags.module.css';

const tags = (props) => (
  <div className={classes.Container}>
    <Tag name="Ação" />
    <Tag name="Aventura" />
    <Tag name="Drama" />
  </div>
);

export default tags;
