import React, { Component } from 'react';
import classes from './MovieDetail.module.css';
import Tags from '../../Tags/Tags';
import Score from '../Score/Score';
import NumberFormat from 'react-number-format';
import API from '../../Api';
import Moment from 'react-moment';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {id: this.props.match.params.id};
  }

  state = {
    id: '-',
    title: '-',
    overview: '-',
    voteAverage: '-',
    releaseDate: '-',
    genreIds: '-',
    posterPath: '-',
    language: '-',
    runtime: '-',
    budget: '-',
    revenue: '-',
    status: '-',
    tags: null
  }

  componentDidMount() {
    this.getMovie(this.state.id);
  }

  getMovie(id) {
    API.get('/movie/' + id, {
      params: {
        api_key: 'a4cab92d173bcd8046c8dbf93bb0661b',
        language: 'pt-BR',
      }
    }).then( response => {
      let movie = response.data;
      this.setState({
        title: movie.title,
        overview: movie.overview,
        voteAverage: movie.vote_average,
        releaseDate: movie.release_date,
        genreIds: movie.genres,
        posterPath: movie.poster_path,
        language: movie.original_language,
        runtime: movie.runtime,
        budget: movie.budget,
        revenue: movie.revenue,
        status: movie.status
      })

      this.setState({tags: <Tags genres={this.state.genreIds} /> })
    });
  }

  render() {

    let profit = this.state.revenue - this.state.budget;

    return(
      <div className={classes.Card}>
        <div className={classes.CardTitle}>
          <h1>{this.state.title}</h1>
          <p>
            <Moment format="DD/MM/YYYY">
              {this.state.releaseDate}
            </Moment>
            </p>
        </div>

        <div className={classes.Info}>
          <div className={classes.Details}>
            <h2 className={classes.Title}>Sinopse</h2>
            <hr />
            <p className={classes.Description}> {this.state.overview} </p>

            <h2 className={classes.Title}>Informações</h2>
            <hr />

            <ul className={classes.AdditionalInfo}>
              <li className={classes.Item}>
                <h3>Situação</h3>
                <p>{this.state.status}</p>
              </li>

              <li className={classes.Item}>
                <h3>Idioma</h3>
                <p>{this.state.language}</p>
              </li>

              <li className={classes.Item}>
                <h3>Duração</h3>
                <p>{this.state.runtime} min</p>
              </li>

              <li className={classes.Item}>
                <h3>Orçamento</h3>
                <NumberFormat value={this.state.budget} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </li>

              <li className={classes.Item}>
                <h3>Receita</h3>
                <NumberFormat value={this.state.revenue} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </li>

              <li className={classes.Item}>
                <h3>Lucro</h3>
                <NumberFormat value={profit} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </li>
            </ul>

            <div className={classes.Tags}>
              <Tags genres={this.state.genreIds} />
              {this.state.tags}
            </div>

            <div className={classes.Score}>
              <Score value={this.state.voteAverage}/>
            </div>

          </div>

          <div className={classes.Poster}>
            <img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + this.state.posterPath} alt="" />
          </div>
        </div>
      </div>
      );
  }
}

export default MovieDetail;
