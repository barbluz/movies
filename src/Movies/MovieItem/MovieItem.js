import React from 'react';
import classes from './MovieItem.module.css';
import Tags from '../../Tags/Tags';
import Score from '../Score/Score';

const movieItem = (props) => (
  <div className={classes.Card}>
    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bLpIFiuWF1bKnBqi7LqnJcLHtN.jpg" alt="" />
    <div className={classes.Info}>
      <h3 className={classes.CardTitle}>Thor: Ragnaruto</h3>
      <div className={classes.Score}>
        <Score value="75%"/>
      </div>
      <p className={classes.Release}>25/10/2017</p>
      <p className={classes.Description}> Thor está aprisionado do outro lado do universo, sem seu martelo, e se vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a destruição de seu lar e o fim da civilização asgardiana que está nas mãos de uma nova e poderosa ameaça, a terrível Hela. Mas primeiro ele precisa sobreviver a uma batalha de gladiadores que o coloca contra seu ex-aliado e vingador, o Incrível Hulk.
      </p>

      <div className={classes.Tags}>
        <Tags />
      </div>

    </div>
  </div>

);

export default movieItem;
