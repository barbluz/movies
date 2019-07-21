import React, { Component } from 'react';
import classes from './MovieDetail.module.css';
import Tags from '../../Tags/Tags';
import Score from '../Score/Score';

class MovieDetail extends Component {
  render() {
    return(
      <div className={classes.Card}>
        <div className={classes.CardTitle}>
          <h1>Thor: Ragnaruto</h1>
          <p>25/10/2017</p>
        </div>

        <div className={classes.Info}>
          <div className={classes.Details}>
            <h2 className={classes.Title}>Sinopse</h2>
            <hr />
            <p className={classes.Description}> Thor está aprisionado do outro lado do universo, sem seu martelo, e se vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a destruição de seu lar e o fim da civilização asgardiana que está nas mãos de uma nova e poderosa ameaça, a terrível Hela. Mas primeiro ele precisa sobreviver a uma batalha de gladiadores que o coloca contra seu ex-aliado e vingador, o Incrível Hulk.
            </p>

            <h2 className={classes.Title}>Informações</h2>
            <hr />

            <ul className={classes.AdditionalInfo}>
              <li className={classes.Item}>
                <h3>Situação</h3>
                <p>Lançado</p>
              </li>

              <li className={classes.Item}>
                <h3>Idioma</h3>
                <p>Inglês</p>
              </li>

              <li className={classes.Item}>
                <h3>Duração</h3>
                <p>2h10min</p>
              </li>

              <li className={classes.Item}>
                <h3>Orçamento</h3>
                <p>$180.000.000,00</p>
              </li>

              <li className={classes.Item}>
                <h3>Receita</h3>
                <p>$853.977.000,00</p>
              </li>

              <li className={classes.Item}>
                <h3>Lucro</h3>
                <p>$673.977.000,00</p>
              </li>
            </ul>

            <div className={classes.Tags}>
              <Tags />
            </div>

            <div className={classes.Score}>
              <Score value="75%"/>
            </div>

          </div>

          <div className={classes.Poster}>
            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bLpIFiuWF1bKnBqi7LqnJcLHtN.jpg" alt="" />
          </div>
        </div>
      </div>
      );
  }
}

export default MovieDetail;
