import React, { Component }from 'react';
import Tag from './Tag/Tag';
import classes from './Tags.module.css';
import API from '../Api';
import { Link } from 'react-router-dom';

class Tags extends Component {
  constructor(props) {
    super(props);

    console.log('[Tags.js] constructor')
    console.log(this.props)
    this.state = {
      allGenres: [],
      genreIds: this.props.genreIds,
      genres: [],
      genreList: this.props.genres
    }
  }

  componentDidMount() {
    this.getGenres();
    if(this.state.genres) {
      this.setState({genreList: this.props.genres})
    }
  }

  getGenres() {
    API.get('/genre/movie/list', {
      params: {
        api_key: 'a4cab92d173bcd8046c8dbf93bb0661b',
        language: 'pt-BR',
      }
    }).then( response => {
      let genres = response.data.genres;
      this.setState({allGenres: genres});

      if(this.props.genreIds) {
        let genreNames = this.state.genreIds.map(genre => {
          return this.state.allGenres.find( element => (element.id === genre)? element : null)
        });

        this.setState({genreList: genreNames})
      }

    });
  }

  render() {
    let tags = null;

    if(this.state.genreList) {
      tags = this.state.genreList.map((genre, index) => {
        return <Link to={'/genre/' + genre.id } key={genre.id}>
                <Tag genre={genre.name}/>
              </Link>
        });
    }

    return (
      <div className={classes.Container}>
        {tags}
      </div>
      );
  }
}

export default Tags;
