import React, { Component } from 'react';
import classes from './MovieItem.module.css';
import Tags from '../../Tags/Tags';
import Score from '../Score/Score';

class MovieItem extends Component {

  render() {
    return (
      <div className={classes.Card}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + this.props.posterPath}
          alt="{this.props.title}"
          className={classes.Poster}
        />
        <div className={classes.Info}>
          <h3 className={classes.CardTitle}>{this.props.title}</h3>
          <div className={classes.Score}>
            <Score value={this.props.voteAverage}/>
          </div>
          <p className={classes.Release}>{this.props.releaseDate}</p>
          <p className={classes.Description}> {this.props.overview}
          </p>

          <div className={classes.Tags}>
            <Tags genreIds={this.props.genreIds} />
          </div>

        </div>
      </div>
      );
  }

};

export default MovieItem;
