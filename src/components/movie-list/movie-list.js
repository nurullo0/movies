import './movie-list.css'

import MovieListItem from '../movie-list-item/movie-list-item'


function MovieList() {
  return (
    <ul className='movie-list'>
      <MovieListItem/>
      <MovieListItem/>
      <MovieListItem/>
    </ul>
  );
}

export default MovieList;