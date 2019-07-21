import React from 'react';
import classes from './Tag.module.css';

const tag = (props) => (
  <div className={classes.Container}>
    { props.name }
  </div>
);

export default tag;
