import React, {
    Component
} from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {

render() {
  const movieYear = new Date(this.props.film.release_date).getFullYear();
    return (
      <div className="film-row">
        <FilmPoster film={ this.props.film } />

        <div className="film-summary">
          <h2>{ this.props.film.title }</h2>
          <p>{movieYear} </p>
        </div>
      </div>
    )
  }
}
export default FilmRow
