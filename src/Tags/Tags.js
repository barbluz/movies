import React, { Component }from 'react';
import Tag from './Tag/Tag';
import classes from './Tags.module.css';
import API from '../Api';

class Tags extends Component {
  constructor(props) {
    super(props);

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
          return this.state.allGenres.find( element => (element.id === genre)? element.name : null)
        });

        let names = genreNames.map( element => (element.name))
        this.setState({genres: names})
      }

    });
  }

  render() {
    let tags = null;

    if(this.state.genreIds) {
      tags = this.state.genres.map((genre, index) => {
        return <Tag genre={genre} key={index} />
        });
    } else if(this.state.genreList) {
      tags = this.state.genreList.map((genre, index) => {
        return <Tag genre={genre.name} key={genre.id} />
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
