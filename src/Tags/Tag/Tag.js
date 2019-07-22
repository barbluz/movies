import React from 'react';
import classes from './Tag.module.css';

const tag = (props) => (
  <div className={classes.Container}>
    { props.genre }
  </div>
);

export default tag;
