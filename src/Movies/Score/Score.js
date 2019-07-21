import React from 'react';
import classes from './Score.module.css';

const score = (props) => (
  <div className={classes.Container}>
    <div className={classes.Score}>
      { props.value }
    </div>
  </div>
);

export default score;
