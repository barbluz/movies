import React from 'react';
import classes from './MovieItem.module.css';

const movieItem = (props) => (
  <div className={classes.Card}>
    <img src="https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg" alt="" />
    <div className={classes.Info}>
      <h3>Thor: Ragnaruto</h3>
      <p className={classes.Release}>25/10/2017</p>
      <p className={classes.Description}> Nullam vitae fermentum orci. Curabitur aliquet hendrerit sem volutpat viverra. Nam tortor ipsum, imperdiet a lobortis id, ornare id risus. Donec sit amet ultrices ex. Vestibulum facilisis rhoncus lobortis. Sed consectetur finibus massa, eu iaculis arcu rutrum et. Sed a faucibus lectus. </p>
    </div>
  </div>
);

export default movieItem;
