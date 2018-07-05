import React, {
    Component
} from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';


class FilmListing extends Component {
  render() {
    let allFilms = TMDB.films.map( (film) => {
      return (
        <FilmRow film={film} key={film.id}/>
      )
    })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
          {allFilms};
      </div>
    );
  }
}

export default FilmListing;
