import React, {
    Component
} from 'react';


class FilmRow extends Component {


render() {
  var posterUrl = "https://image.tmdb.org/t/p/w780" + this.props.film.poster_path;
  var movieYear = new Date(this.props.film.release_date).getFullYear();
    return (
      <div className="film-row">
        <img src={posterUrl} alt="" />

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{movieYear} </p>
        </div>
      </div>
)
}
}
export default FilmRow
